# 🎮 Gaming Team – Game Key Marketplace

Welcome to **Gaming Team**, a web application that allows users to buy and sell video game keys at competitive prices.

## 🌐 Live Demo

Check out the live application here: [https://gaming-team-4cwe.onrender.com](https://gaming-team-4cwe.onrender.com)

## 🛠️ Features

- **User Authentication**: Users can register and log in to access the platform.
- **Game Listings**: Browse a collection of available game keys.
- **Buy & Sell**: Purchase game keys or list your own for sale.

## 🚀 Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## 📂 Project Structure

```
project-root/
├── client/                 # Frontend files
│   ├── index.html
│   ├── styles.css
│   └── scripts.js
├── server/                 # Backend files
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   └── server.js           # Entry point
├── .env                    # Environment variables
├── package.json
└── README.md
```

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/gaming-team.git
   cd gaming-team
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the server**:

   ```bash
   npm start
   ```

5. **Access the application**:

   Open your browser and navigate to `http://localhost:3000`.

## 🧪 Testing

To run tests (if available), use:

```bash
npm test
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).