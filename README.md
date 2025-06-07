# Full-Stack E-Commerce Website

## Overview

This is a **full-stack e-commerce website** developed using **React JS** for the frontend and **Node.js**, **Express**, and **MongoDB** for the backend. It features a modern, responsive design and a secure user authentication flow with an admin panel for product management.

---

## Frontend Development

The frontend is built with **React JS**, providing a responsive and user-friendly interface that works well on desktops, tablets, and mobile devices through CSS media queries.

### Features

- **Home Page:**  
  - Trending products display  
  - Promotional offer banners  
  - Newsletter subscription form  

- **Category Pages:**  
  - Separate pages for Men’s, Women’s, and Kids’ categories  

- **Single Product Page:**  
  - Image gallery for product images  
  - Product price, description, and related products  

- **Shopping Cart Page:**  
  - View, update, and remove cart items  

- **Login/Register Page:**  
  - User account creation and login with JWT-based authentication  

- **Responsive Design:**  
  - Fully responsive across devices for an optimal user experience  

---

## Backend Development

The backend API is built using **Node.js** and **Express**, with **MongoDB** as the database, providing robust APIs for product and user management.

### Features

- **Product APIs:**  
  - Add, update, display products  

- **Cart API:**  
  - Manage user cart items  

- **User Authentication:**  
  - Secure login and registration with JWT tokens  

- **Admin Panel:**  
  - Secure dashboard for admins to add, update, and delete products  

### Technologies

- Node.js and Express for API development  
- MongoDB with Mongoose for database operations  
- JSON Web Tokens (JWT) for authentication  
- Multer for handling image uploads  

---

## Project Structure
## 📁 Project Structure

```
full-stack-ecommerce-website/
├── admin/                      # Admin dashboard (React + Vite)
│   ├── public/                 # Admin static assets
│   ├── src/
│   │   ├── Components/         # Admin UI components (AddProduct, ListProduct, Navbar, Sidebar)
│   │   ├── Pages/              # Admin pages
│   │   ├── App.jsx             # Admin main app component
│   │   ├── main.jsx            # Admin React entry point
│   ├── package.json            # Admin dependencies
│   ├── vite.config.js          # Vite config for admin
│
├── backend/                    # Backend API (Node.js + Express + MongoDB)
│   ├── controllers/            # API controllers (product, user, order logic)
│   ├── models/                 # Mongoose schemas (User, Product, Order)
│   ├── routes/                 # Express routes (API endpoints)
│   ├── upload/images/          # Uploaded product images
│   ├── index.js                # Backend server entry point
│   ├── package.json            # Backend dependencies
│
├── frontend/                   # Customer frontend (React)
│   ├── public/                 # Frontend static assets
│   ├── src/
│   │   ├── Components/         # UI components (Navbar, Footer, ProductDisplay, CartItems, etc.)
│   │   ├── Context/            # React context for state management (ShopContext)
│   │   ├── Pages/              # Pages (Shop, Cart, LoginSignup, Product detail, etc.)
│   │   ├── App.js              # Main frontend app component
│   │   ├── index.js            # React entry point
│   ├── package.json            # Frontend dependencies
│
├── README.md                   # Project documentation
├── .gitignore                  # Files/folders ignored by Git
```


## Installation & Setup

### Prerequisites

- Node.js (v14 or above)  
- MongoDB (local or Atlas cloud instance)  
- Git (optional)

---

### Clone the repository (optional)

```bash
git clone https://github.com/Khushiagra1234/full-stack-ecommerce-website.git
cd full-stack-ecommerce-website
```
### Backend Setup
```bash

cd backend
npm install
```

Create a .env file in the backend folder with these variables:

```bash]
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

#### Start the backend server:

```bash
npm start
The backend will run on http://localhost:5000.
```

### Frontend Setup
```bash

cd ../frontend
npm install
npm start
The frontend will run on http://localhost:3000.
```

### Admin Dashboard Setup
```bash

cd ../admin
npm install
npm run dev
```

The admin dashboard will run on http://localhost:5173.

### Usage

Browse products and add them to your cart from the frontend.

Create an account and login to place orders.

Use the admin dashboard to add, update, or delete products.

The backend handles authentication, data management, and file uploads securely.

### Screenshots
![Screenshot 2025-05-25 202240](https://github.com/user-attachments/assets/bcabd69f-c63f-4829-b09b-bc85b4b9758e)
![Screenshot 2025-05-25 202215](https://github.com/user-attachments/assets/6b6c306d-0c05-4743-ab97-ff9bba790f90)



### Contributing
Contributions are welcome! Please fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Contact
## 👤 Khushi Tayal

- 📧 **Email**: [khushiagra1111@gmail.com](mailto:khushiagra1111@gmail.com)  
- 🐙 **GitHub**: [github.com/khushitayal](https://github.com/Khushiagra1234)  
- 💼 **LinkedIn**: [linkedin.com/in/khushitayal](https://www.linkedin.com/in/khushi-tayal-6b009b264/)

Thank you for checking out this project! 🙌
