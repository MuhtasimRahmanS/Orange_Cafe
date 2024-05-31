import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import FoodDetails from "../Pages/FoodDetails";
import Purchase from "../Pages/Purchase";
import PrivateRoute from "../Routes/PrivateRoute";
import MyAdded from "../Pages/MyAdded";
import AddFood from "../Pages/AddFood";
import MyOrder from "../Pages/MyOrder";
import Update from "../Pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-foods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/details/:id",
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <Purchase></Purchase>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-added",
        element: (
          <PrivateRoute>
            <MyAdded></MyAdded>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-order",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateDtails/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
