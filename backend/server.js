require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Places = require("./data/Places");
const authRoutes = require("./routes/auth");
const connectDB = require("./config/db");
const authMiddleware = require("./middleware/authMiddleware");
const tripRoutes = require("./routes/Trips");
const aiRoutes = require("./routes/ai");
const weatherRoutes = require("./routes/weather");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/weather", weatherRoutes);

// Protected test route
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You accessed a protected route!",
    userId: req.userId,
  });
});

app.get("/api/destinations", (req, res) => {
  res.json(Places);
});

app.get("/api/destinations/:name", (req, res) => {
  const destinationName = req.params.name.toLowerCase();

  const place = Places.find(
    (item) => item.name.toLowerCase() === destinationName
  );

  if (!place) {
    return res.status(404).json({
      message: "Destination not found",
    });
  }

  res.json(place);
});

const PORT = 5005;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});