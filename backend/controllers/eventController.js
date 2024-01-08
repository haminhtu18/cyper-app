const asyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");

// Create Event
const createEvent = asyncHandler(async (req, res) => {
  const {
    name,
    desc,
    category,
    tags,
    currentPrice,
    discountPrice,
    stock,
    start_Date,
    finish_Date,
  } = req.body;

  // let images = [];
  // if (typeof req.body.images === "string") {
  //   images.push(req.body.images);
  // } else {
  //   images = req.body.images;
  // }

  // const imagesLinks = [];

  // for (let i = 0; i < images.length; i++) {
  //   const result = await cloudinary.v2.uploader.upload(images[i], {
  //     folder: "products",
  //   });

  //   imagesLinks.push({
  //     public_id: result.public_id,
  //     url: result.secure_url,
  //   });
  // }
  // const productData = req.body;
  // productData.images = imagesLinks;

  // Create Product
  const event = await Event.create({
    userId: req.user.id,
    name,
    desc,
    tags,
    category,
    currentPrice,
    discountPrice,
    stock,
    start_Date,
    finish_Date,
  });

  console.log(event);
  res.status(201).json(event);
});

//Get Single Event
const getEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const event = await Event.findById(id);
  if (!event) {
    res.status(404);
    throw new Error("Event product not found");
  }
  res.status(200).json(event);
});

//Get All Events
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({ userId: req.user.id }).sort("-createdAt");
  res.status(200).json(events);
});

//Update Event
const updateEvent = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const {
    name,
    category,
    desc,
    tags,
    currentPrice,
    discountPrice,
    stock,
    start_Date,
    finish_Date,
  } = req.body;

  let startDate = new Date(start_Date);
  let finishDate = new Date(finish_Date);

  const event = await Event.findById(id);
  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }

  // Update Product
  const updatedEvent = await Event.findByIdAndUpdate(
    { _id: id },
    {
      name,
      category,
      desc,
      tags,
      currentPrice,
      discountPrice,
      stock,
      start_Date: startDate,
      finish_Date: finishDate,
      // image: Object.keys(fileData).length === 0 ? product?.image : fileData,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  console.log(updatedEvent);
  res.status(200).json(updatedEvent);
});
module.exports = {
  createEvent,
  getEvents,
  updateEvent,
  getEvent,
};
