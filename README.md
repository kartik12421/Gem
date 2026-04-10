# Gem - ChatBot Application

A full-stack real-time chatBot application built with the MERN stack (MongoDB, Express, React, Node.js).

## Project Structure

```
Gem/
├── backend/             # Node.js/Express server
│   ├── controllers/     # Request handlers
│   ├── database/        # Database configuration
│   ├── middlewares/     # Custom middleware (auth, email)
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── index.js         # Server entry point
│   └── package.json     # Backend dependencies
│
└── frontend/            # React application
    ├── src/
    │   ├── components/  # Reusable React components
    │   ├── context/     # Context API state management
    │   ├── pages/       # Page components
    │   ├── App.jsx      # Main App component
    │   └── main.jsx     # Application entry point
    ├── public/          # Static assets
    ├── vite.config.js   # Vite configuration
    ├── tailwind.config.js
    └── package.json     # Frontend dependencies
```

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Nodemailer** - Email service

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Context API** - State management

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)

## Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add your configuration:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   # Add other environment variables as needed
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory if needed:
   ```
   VITE_API_URL=http://localhost:5000
   ```

## Running the Application

### Development Mode

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173` (Vite default port)

### Production Build

**Frontend:**
```bash
cd frontend
npm run build
```

## Features

- User authentication and authorization
- Real-time messaging
- Email verification
- User profiles
- Conversation management

## API Routes

### User Routes
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `POST /api/users/verify` - Email verification

### Chat Routes
- `GET /api/chats` - Get all conversations
- `POST /api/chats` - Create new conversation
- `POST /api/messages` - Send message

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For support, please open an issue in the repository.
