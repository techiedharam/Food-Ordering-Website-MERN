# Food Ordering Website - MERN Stack

This project is a full-stack food ordering application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The application includes a backend server, a frontend for users, and an admin panel for management.

## Table of Contents
- [How to Setup & Run this Project](#how-to-setup--run-this-project)
- [Prerequisites](#prerequisites)
- [Setup Backend](#setup-backend)
- [Setup Frontend & Admin Panel](#setup-frontend--admin-panel)
- [Deployment](#deployment)
- [Video Tutorial](#video-tutorial)

---

## How to Setup & Run this Project
Follow the steps below to set up and run the project on your local machine.

---

### Prerequisites
Ensure you have the following installed:
1. **Node.js**
   - [Download Node.js](https://nodejs.org/en/download/)
   - Follow the installation instructions on the website.

2. **MongoDB** (Use MongoDB Atlas or local MongoDB setup)

---

### Setup Backend

1. Open the project folder in **VS Code**.
2. Navigate to the `backend` folder.
3. Open an integrated terminal (Right-click on the sidebar > Select “Open In Integrated Terminal”).
4. Run the following command to install dependencies:
   ```bash
   npm install
   ```
5. Set up MongoDB:
   - Sign up on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (or use your existing account).
   - Create a new project.
   - Go to the **Database** section and build a new database:
     - Select **M0 Free Tier** and your region.
     - Create the database.
     - Set up a username and password (avoid using the `@` symbol in the password).
     - Whitelist IP `0.0.0.0/0` to allow access from anywhere.
   - Connect to the database using MongoDB Compass or copy the connection string.
   - Replace `<username>`, `<password>`, and `<dbname>` in the connection string and paste it into `db.js` or `.env` file.
6. Set up **Stripe**:
   - Open the `.env` file in the `backend` folder.
   - Paste your **Stripe Secret Key** in the variable `STRIPE_SECRET_KEY`.
7. Start the backend server:
   ```bash
   npm run server
   ```

---

### Setup Frontend & Admin Panel

1. Navigate to the `frontend` or `admin` folder.
2. Open an integrated terminal in the respective folder.
3. Run the following command to install dependencies:
   ```bash
   npm install
   ```
4. Once the installation is complete, you will see a `node_modules` folder in the directory.
5. Start the development server:
   ```bash
   npm run dev
   ```
6. The project will open in your default web browser.

---

### Deployment
To deploy this project on platforms like **Vercel**, ensure the following:
1. Add the necessary environment variables in the deployment platform’s settings (e.g., `MONGO_URI`, `STRIPE_SECRET_KEY`).
2. Use the `start` script in `package.json` for production:
   ```json
   "scripts": {
     "start": "node server.js"
   }
   ```
3. Follow the hosting provider’s instructions for deploying Node.js and React.js applications.

---

### Video Tutorial
For a detailed step-by-step guide, watch the video tutorials available on the [GreatStackDev YouTube Channel](https://www.youtube.com/@GreatStackDev/videos).

---

## Key Features
- User-friendly food ordering system.
- Secure payments with Stripe.
- Admin panel for managing orders and products.
- Responsive design for seamless use on all devices.

---

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

Happy coding! 🎉

