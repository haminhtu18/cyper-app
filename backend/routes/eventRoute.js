const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const {
  createEvent,
  getEvents,
  updateEvent,
  getEvent,
} = require("../controllers/eventController");

router.post("/create-event", protect, createEvent);
router.get("/all-events", protect, getEvents);
router.get("/event/:id", protect, getEvent);
router.patch("/update-event/:id", protect, updateEvent);

module.exports = router;
