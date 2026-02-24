# Blog Site

A simple blog application with React frontend and Node.js/Express backend.

## Features

- View all blog posts
- Read individual blog posts
- Create new blog posts
- Delete blog posts
- Responsive design
- Modern UI with gradient backgrounds

## Tech Stack

### Frontend
- React
- CSS3

### Backend
- Node.js
- Express
- CORS enabled
- In-memory storage (no database required)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install backend dependencies:
```bash
cd server
npm install
```

2. Install frontend dependencies:
```bash
cd client
npm install
```

### Running the Application

1. Start the backend server (from the server directory):
```bash
cd server
npm start
```
The server will run on http://localhost:5000

2. Start the frontend (from the client directory):
```bash
cd client
npm start
```
The app will open in your browser at http://localhost:3000

## API Endpoints

- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:id` - Get a single blog post
- `POST /api/blog` - Create a new blog post
- `PUT /api/blog/:id` - Update a blog post
- `DELETE /api/blog/:id` - Delete a blog post

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.js         # Main app component
│   │   ├── BlogList.js    # List of blog posts
│   │   ├── BlogPost.js    # Individual post view
│   │   ├── CreatePost.js  # Create post form
│   │   └── *.css          # Styling files
│   └── package.json
│
└── server/                 # Express backend
    ├── models/
    │   └── BlogPost.js    # Blog post model
    ├── routes/
    │   └── blog.js        # Blog routes
    ├── server.js          # Main server file
    └── package.json
```

## Notes

- This application uses in-memory storage. Data will be lost when the server restarts.
- Two sample blog posts are included by default.
- To add persistent storage, integrate a database like MongoDB or PostgreSQL.

## License

MIT
