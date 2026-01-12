### MERN Task Management Application

A full-stack Task Management Application built using the MERN stack that allows users to manage projects and tasks with secure authentication and authorization.

The application supports JWT-based authentication, project and task CRUD operations, role-based access control, and a dashboard with task statistics, presented through a clean and modern user interface.

---

## Installation and Setup

### Prerequisites

Node.js  
npm  
MongoDB (local or MongoDB Atlas)  
Git  

### Backend Setup

Navigate to the backend folder  

Install dependencies  

cd backend
npm install


Create a .env file inside the backend folder

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Start the backend server

npm run dev


Backend will run on

http://localhost:5000


### Frontend Setup

Navigate to the frontend folder  

Install dependencies and start the development server  



cd frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173


### Application Usage

Open the browser and go to http://localhost:5173  

Register a new user  

Login using registered credentials  

Create projects and manage tasks  

---

## Features

### Authentication and Authorization

- User registration and login using JSON Web Tokens (JWT)
- Secure password hashing using bcrypt
- Protected routes on both frontend and backend
- Logout functionality
- Dynamic user profile management

### Project Management

- Create, view, update, and delete projects
- Projects are user-specific with ownership enforcement

### Task Management

- Create tasks under specific projects
- Update and delete tasks
- Task status tracking:
  - Todo
  - In Progress
  - Done
- Task priority levels:
  - Low
  - Medium
  - High
- Filter tasks by status and priority

## Dashboard

Overview of all projects  

Task statistics including:  

- Total tasks  
- Todo count  
- In Progress count  
- Done count  

### User Interface

Modern user interface built with Tailwind CSS  
Responsive layout with sidebar navigation  
Clean design using gradients, transitions, and card-based layouts  

---

## Tech Stack

### Frontend

- React
- React Router
- React Hooks
- Axios
- Tailwind CSS
- Vite

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose  
- JSON Web Tokens (JWT)
- bcryptjs

---

## Project Status

All core requirements have been implemented successfully
