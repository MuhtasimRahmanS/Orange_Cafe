const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://assignment-11-client-3d8c0.web.app",
      "https://orange-cafe.netlify.app",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qov5o8j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const logger = (req, res, next) => {
  console.log("log: info", req.method, req.url);
  next();
};

const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;

  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  });
};

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const foodCollection = client.db("orangeCafe").collection("allFood");
    const orderCollection = client.db("orangeCafe").collection("allOrder");
    const feedbackCollection = client
      .db("orangeCafe")
      .collection("allFeedback");

    app.post("/jwt", logger, async (req, res) => {
      const user = req.body;
      console.log("user for token", user);
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1d",
      });

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send({ success: true });
    });

    app.post("/logout", async (req, res) => {
      const user = req.body;
      console.log("logging out", user);
      res.clearCookie("token", { maxAge: 0 }).send({ success: true });
    });

    app.get("/allFood", async (req, res) => {
      const search = req.query.search;
      let query = { foodName: { $regex: search, $options: "i" } };
      const cursor = foodCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/topFood", async (req, res) => {
      const cursor = foodCollection.find().sort({ purchases: -1 }).limit(6);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/allFeedback", async (req, res) => {
      const cursor = feedbackCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/details/:id", async (req, res) => {
      const result = await foodCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    app.get("/purchase/:id", async (req, res) => {
      const result = await foodCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    app.get("/myOrder/:email", logger, verifyToken, async (req, res) => {
      const result = await orderCollection
        .find({
          buyerEmail: req.params.email,
        })
        .toArray();
      res.send(result);
    });

    app.get("/myAdded/:email", logger, verifyToken, async (req, res) => {
      const result = await foodCollection
        .find({ buyerEmail: req.params.email })
        .toArray();
      res.send(result);
    });

    app.get("/updateDtails/:id", logger, verifyToken, async (req, res) => {
      const result = await foodCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    app.post("/allFood", async (req, res) => {
      const newFood = req.body;
      console.log(newFood);
      const result = await foodCollection.insertOne(newFood);
      res.send(result);
    });

    app.post("/allFeedback", async (req, res) => {
      const newFeedback = req.body;
      console.log(newFeedback);
      const result = await feedbackCollection.insertOne(newFeedback);
      res.send(result);
    });

    app.post("/allOrder", async (req, res) => {
      const newOrder = req.body;
      const qun = parseInt(newOrder.orderQuantity);

      console.log(newOrder);
      const result = await orderCollection.insertOne(newOrder);

      const updateQun = {
        $inc: { purchases: qun, quantity: -qun },
      };
      const foodQuery = { _id: new ObjectId(newOrder.foodId) };
      const updateQunPur = await foodCollection.updateOne(foodQuery, updateQun);
      console.log(updateQunPur);
      res.send(result);
    });

    app.put("/update/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const data = {
        $set: {
          photo: req.body.photo,
          foodName: req.body.foodName,
          country: req.body.country,
          buyerName: req.body.buyerName,
          price: req.body.price,
          buyerEmail: req.body.buyerEmail,
          quantity: req.body.quantity,
          category: req.body.category,
          description: req.body.description,
        },
      };
      const result = await foodCollection.updateOne(query, data);
      console.log(result);
      res.send(result);
    });

    app.delete("/delete/:id", async (req, res) => {
      const result = await orderCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      console.log(result);
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(port, () => {
  console.log(`port${port}`);
});
