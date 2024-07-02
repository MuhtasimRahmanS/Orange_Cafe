# Orange Cafe

Welcome to the Orange cafe project! This web application allows users to add food items, order food, and review food. The project is built using modern web technologies and provides a seamless user experience for managing restaurant menus and customer orders.
Live Link: https://orange-cafe.netlify.app/
## Features

- **Add Food Items**: Administrators can add new food items to the menu.
- **Order Food**: Users can browse the menu and place orders.
- **Review Food**: Users can leave reviews and ratings for food items they have ordered.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/restaurant-website.git
    cd restaurant-website
    ```

2. **Install dependencies**:
    ```bash
    # For backend
    cd backend
    npm install

    # For frontend
    cd ../frontend
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the `backend` directory and add the following variables:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

4. **Start the development server**:
    ```bash
    # For backend
    cd backend
    npm start

    # For frontend
    cd ../frontend
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

### Adding Food Items

1. Log in as an administrator.
2. Navigate to the "Add Food" section.
3. Fill in the details of the new food item and click "Add".

### Ordering Food

1. Browse the menu.
2. Select the food items you want to order.
3. Proceed to checkout and complete the order process.

### Reviewing Food

1. Navigate to the "Order History" section.
2. Select the order you want to review.
3. Leave a rating and a review for the food items in that order.

## Contributing

We welcome contributions to the project! Here are some ways you can contribute:

- Report bugs and issues
- Suggest new features
- Submit pull requests with improvements

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions or need further assistance, feel free to reach out to us at [email@example.com](mailto:email@example.com).

---

Thank you for using the Restaurant Website project! We hope you have a great experience.

