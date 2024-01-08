const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "Please add a description"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
      trim: true,
    },
    tags: {
      type: String,
      required: [true, "Please add a tags"],
      trim: true,
    },
    start_Date: {
      type: Date,
      required: true,
    },
    finish_Date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      default: "Running",
    },
    currentPrice: {
      type: Number,
    },
    discountPrice: {
      type: Number,
      required: [true, "Please add a price"],
      trim: true,
    },
    stock: {
      type: Number,
      required: [true, "Please add a stock"],
    },
    // images: [
    //   {
    //     type: String,
    //   },
    // ],
    sold_out: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
