# ✈️ TravelMate AI

> An AI-powered travel discovery and itinerary planning platform focused on exploring India.

TravelMate AI is a full-stack travel web application designed to help users discover Indian destinations, explore detailed travel information, generate personalized AI-powered itineraries, check live weather, and save trips for later.

The platform combines a modern React interface with a Node.js/Express backend, MongoDB database, Gemini AI, and external APIs to provide a complete travel-planning experience.

---

## 🌍 Overview

TravelMate AI brings destination discovery and personalized trip planning into a single platform.

Users can:

- Explore destinations across India
- Search and filter destinations
- View detailed destination information
- Explore attractions, food, hotels and hidden gems
- Check live weather information
- Generate personalized AI itineraries
- Customize trips according to budget and interests
- Save trips to their account
- Load and delete saved trips
- Create and manage an authenticated user account
- Switch between light and dark themes
- Access the application across desktop, tablet and mobile devices

---

## ✨ Key Features

### 🗺️ Destination Discovery

- Explore 50+ Indian destinations
- Search destinations
- Filter destinations
- Destination cards with ratings and basic information
- Dynamic destination pages

### 📍 Destination Details

Each destination provides:

- Destination overview
- State information
- Attractions
- Hidden gems
- Recommended hotels
- Local food
- Traveler reviews
- Estimated budget
- Best time to visit
- Destination gallery
- Google Maps integration
- Live weather information

### 🌦️ Live Weather

TravelMate AI integrates with the OpenWeather API to provide current weather information for destinations.

Weather information includes:

- Current temperature
- Feels-like temperature
- Humidity
- Weather description
- Weather condition icon data

Architecture:

```text
React Frontend
      ↓
Express Weather Route
      ↓
OpenWeather API
      ↓
Live Weather Data
      ↓
React UI
