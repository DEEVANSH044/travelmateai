TravelMate AI

AI-powered travel discovery and planning platform focused on exploring destinations across India.

Overview

TravelMate AI is a frontend travel web application built with React.js. It helps users discover Indian destinations, explore detailed travel information, create personalized itineraries, and save their trips.

The project focuses on providing a modern, responsive and user-friendly travel experience with reusable React components and structured destination data.

Current Status: Frontend implementation is complete. Backend, database, live APIs and real AI integration are planned for the next phase.

Features

* 🗺️ Destination Discovery
    * Explore Indian destinations
    * Search and filter destinations
    * Popular destination recommendations
* 📍 Dynamic Destination Details
    * Destination information
    * Attractions
    * Hotels
    * Local food
    * Hidden gems
    * Reviews
    * Weather and budget information
* 🖼️ Destination Gallery
    * Responsive image gallery
    * Full-screen image viewer
    * Previous/next navigation
    * Keyboard navigation
    * Escape-to-close support
* ✈️ Travel Planner
    * Select destination
    * Trip duration
    * Budget
    * Travel companion
    * Interests
    * Day-by-day itinerary generation
    * Budget estimation
    * Packing suggestions
* 🧬 Travel DNA
    * Travel preference quiz
    * Travel personality/profile
    * Personalized destination recommendations
* 🔐 Authentication UI
    * Login
    * Signup
    * Protected routes
* 💾 Saved Trips
    * Save generated trips
    * Load saved trips
    * Delete saved trips
    * Uses browser localStorage in the current frontend version
* 🌙 Dark / Light Mode
* 📱 Responsive Design
    * Desktop
    * Tablet
    * Mobile

Tech Stack

Technology	Purpose
React.js	Frontend framework
JavaScript	Application logic
React Router	Client-side routing
Tailwind CSS	Styling and responsive design
Vite	Development and build tool
LocalStorage	Frontend persistence

Project Structure

TravelMate-AI/
│
├── public/
│   └── assets/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Gallery.jsx
│   │   ├── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Destinations.jsx
│   │   ├── Destination.jsx
│   │   ├── Planner.jsx
│   │   ├── TravelDNA.jsx
│   │   ├── About.jsx
│   │   └── ...
│   │
│   ├── data/
│   │   └── Places.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md

Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Navigate to the project:

cd TravelMate-AI

Install dependencies:

npm install

Start the development server:

npm run dev

Open the local URL shown in the terminal, usually:

http://localhost:5173

Available Scripts

npm run dev

Starts the development server.

npm run build

Creates a production build.

npm run preview

Previews the production build locally.

How It Works

TravelMate AI uses structured destination data stored in the frontend.

For example:

Places.js
   ↓
Destinations Page
   ↓
User selects destination
   ↓
Dynamic Destination Route
   ↓
Destination Details
   ↓
Planner
   ↓
Personalized Itinerary

React state and JavaScript logic are used to handle user preferences and dynamically generate the planner results.

AI Planner — Current Implementation

The current planner is a frontend prototype.

The itinerary is currently generated using:

* Structured destination data
* User-selected interests
* Trip duration
* Budget
* Companion type
* JavaScript-based planning logic

It is not yet connected to a real LLM API.

The planned architecture is:

React Frontend
      ↓
Node.js + Express Backend
      ↓
Gemini API
      ↓
AI Generated Itinerary
      ↓
React Frontend

Future Improvements

The next development phase will include:

* Node.js + Express backend
* MongoDB database
* Real user authentication
* Gemini API integration
* Real AI-generated itineraries
* Live weather API
* Google Maps / Mapbox integration
* Cloud-based saved trips
* User profiles
* Trip sharing
* Deployment
* Performance optimization
* Security improvements

Learning Outcomes

Building TravelMate AI helped strengthen practical skills in:

* React component architecture
* JSX
* Props
* React Hooks
* State management
* React Router
* Dynamic routes
* Form handling
* Array methods such as map(), filter() and find()
* LocalStorage
* Reusable components
* Responsive UI development
* Tailwind CSS
* Frontend application architecture

Project Status

Frontend: Completed
Backend: Planned
Database: Planned
Real AI Integration: Planned
Live API Integration: Planned
Deployment: Planned

Author

Solo Project — TravelMate AI

Built with React.js, JavaScript and Tailwind CSS.

⸻

GitHub Repository

TravelMate AI
├── React Frontend
├── Destination Discovery
├── Travel Planner
├── Travel DNA
├── Authentication UI
├── Saved Trips
└── Responsive Design

Note: TravelMate AI is currently a frontend-stage project. Some features such as AI itinerary generation, authentication persistence, live weather and maps are planned for the backend/integration phase.




deevanshrana11_db_user

SwXhU5Y4GYGq6toV


mongodb+srv://deevanshrana11_db_user:SwXhU5Y4GYGq6toV@cluster0.nvbqy8t.mongodb.net/?appName=Cluster0