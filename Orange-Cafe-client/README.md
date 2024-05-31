# Orange Cafe - README

Welcome to Orange Cafe, a web application designed to offer a delightful food browsing and purchasing experience. This document provides detailed information about the application, its features, and how to set it up.

## Live Site

Check out the live site: [orangecafe.com]()

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)

## Features

### Navbar

- **Website Name**
- **Home**
- **All Foods**
- **Gallery**
- **Conditional Login/Logout**
- **My Profile (with profile picture if logged in)**

### Homepage

- **Banner Section**: Contains a heading, short description, and button redirecting to the All Foods page.
- **Top Foods Section**: Displays 6 top-selling food items with information like Food Name, Food Image, Food Category, Price, and Details Button.
- **See All Button**: Redirects to the All Foods page.
- **Extra Sections**: Two additional relevant and attractive sections.

### All Food Page

- **Page Title**
- **Food Cards**: Displays all food items with a search functionality.
- **Search Functionality**: Search based on the food name.
- **Each Card**: Contains Food Name, Food Image, Food Category, Price, Quantity, and Details Button.

### Single Food Page

- Displays detailed information about a food item including Food Name, Food Image, Food Category, Price, Made By, Food Origin, Short Description, and Purchase Button.
- **Purchase Button**: Redirects to the Food Purchase Page (Private Route).

### Food Purchase Page

- Contains a form with Food Name, Price, Quantity, Buyer Name, Buyer Email, Buying Date, and Purchase Button.

### Gallery Page

- **Page Title**
- **Gallery Section**: Displays all images added by the user with an overlay showing user's name and feedback.
- **Add Button**: Opens a modal for user to submit their experience and image.

### Login and Registration Systems

- **Registration Page**: Contains fields for Name, Email, Photo URL, and Password.
- **Login Page**: Contains fields for Email/Password and Social Login System.
- **Error Messages**: Display relevant error messages when necessary.

### My Profile

- **My Added Food Items**: Displays all food items added by the user with update functionality.
- **Add a Food Item**: Contains a form to add a new food item.
- **My Ordered Food Items**: Displays all food items ordered by the user with delete functionality.

### 404 Page

- Contains an interesting image/gif and a Back to Home button.

### Challenge Requirements

- **Single Food Quantity**: Implement a feature to handle food item quantities and prevent purchasing unavailable items.

### Authorization

- **JWT Token**: Authorize server routes with JWT token.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, Firebase
