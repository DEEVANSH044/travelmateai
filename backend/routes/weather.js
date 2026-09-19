const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        message: "City is required",
      });
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        message: data.message || "Failed to fetch weather",
      });
    }

    res.json({
      city: data.name,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    });
  } catch (error) {
    console.error("Weather error:", error);

    res.status(500).json({
      message: "Server error while fetching weather",
    });
  }
});

module.exports = router;