const express = require("express");
const Trip = require("../moduls/Trip");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Save a trip
router.post("/", authMiddleware, async (req, res) => {
  try {
    const {
      destination,
      days,
      budget,
      companion,
      interests,
      itinerary,
      packingList,
      budgetBreakdown,
    } = req.body;

    if (!destination || !days || !budget || !companion) {
      return res.status(400).json({
        message: "Please provide destination, days, budget and companion",
      });
    }

    const trip = await Trip.create({
      user: req.userId,
      destination,
      days,
      budget,
      companion,
      interests,
      itinerary,
      packingList,
      budgetBreakdown,
    });

    res.status(201).json({
      message: "Trip saved successfully",
      trip,
    });
  } catch (error) {
    console.error("Save trip error:", error);

    res.status(500).json({
      message: "Server error while saving trip",
    });
  }
});

// Get logged-in user's saved trips
router.get("/", authMiddleware, async (req, res) => {
  try {
    const trips = await Trip.find({
      user: req.userId,
    }).sort({ createdAt: -1 });

    res.json(trips);
  } catch (error) {
    console.error("Get trips error:", error);

    res.status(500).json({
      message: "Server error while getting trips",
    });
  }
});
// Delete a saved trip
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const trip = await Trip.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    res.json({
      message: "Trip deleted successfully",
    });
  } catch (error) {
    console.error("Delete trip error:", error);

    res.status(500).json({
      message: "Server error while deleting trip",
    });
  }
});

module.exports = router;