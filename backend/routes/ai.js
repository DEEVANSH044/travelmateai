const express = require("express");
const { GoogleGenAI, Type } = require("@google/genai");

const router = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post("/plan", async (req, res) => {
  try {
    const {
      destination,
      days,
      budget,
      companion,
      interests,
    } = req.body;

    if (!destination || !days || !budget || !companion) {
      return res.status(400).json({
        message:
          "Please provide destination, days, budget and companion.",
      });
    }

    const prompt = `
Create a practical Indian travel itinerary.

Destination: ${destination}
Duration: ${days} days
Budget: ${budget}
Companion: ${companion}
Interests: ${interests?.join(", ") || "Sightseeing"}

Create exactly ${days} days.

Every day must have exactly:
1. Morning
2. Afternoon
3. Evening

Keep activities realistic for the destination.
Keep descriptions short.
Give realistic estimated budget and packing suggestions.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",

      contents: prompt,

      config: {
        responseMimeType: "application/json",

        responseSchema: {
          type: Type.OBJECT,

          properties: {
            destination: {
              type: Type.STRING,
            },

            state: {
              type: Type.STRING,
            },

            weather: {
              type: Type.STRING,
            },

            budgetTier: {
              type: Type.STRING,
            },

            duration: {
              type: Type.INTEGER,
            },

            days: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,

                properties: {
                  day: {
                    type: Type.INTEGER,
                  },

                  schedule: {
                    type: Type.ARRAY,

                    items: {
                      type: Type.OBJECT,

                      properties: {
                        time: {
                          type: Type.STRING,
                        },

                        title: {
                          type: Type.STRING,
                        },

                        desc: {
                          type: Type.STRING,
                        },
                      },

                      required: [
                        "time",
                        "title",
                        "desc",
                      ],
                    },
                  },
                },

                required: [
                  "day",
                  "schedule",
                ],
              },
            },

            hotelSuggestion: {
              type: Type.STRING,
            },

            foodSuggestion: {
              type: Type.STRING,
            },

            packing: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
            },

            totalCostNum: {
              type: Type.INTEGER,
            },

            estCost: {
              type: Type.STRING,
            },

            breakdown: {
              type: Type.ARRAY,

              items: {
                type: Type.OBJECT,

                properties: {
                  category: {
                    type: Type.STRING,
                  },

                  percent: {
                    type: Type.INTEGER,
                  },

                  amount: {
                    type: Type.INTEGER,
                  },
                },

                required: [
                  "category",
                  "percent",
                  "amount",
                ],
              },
            },
          },

          required: [
            "destination",
            "state",
            "weather",
            "budgetTier",
            "duration",
            "days",
            "hotelSuggestion",
            "foodSuggestion",
            "packing",
            "totalCostNum",
            "estCost",
            "breakdown",
          ],
        },
      },
    });

    const trip = JSON.parse(response.text);

    console.log("AI trip generated successfully");

    res.json({
      message: "AI itinerary generated successfully",
      trip,
    });
  } catch (error) {
    console.error("Gemini error:", error);

    res.status(500).json({
      message: "Failed to generate AI itinerary",
      error: error.status || 500,
    });
  }
});

module.exports = router;