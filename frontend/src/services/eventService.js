import axios from "axios";

export const BACKEND_URL = "http://localhost:5000";
const API_URL = `${BACKEND_URL}/api/events`;

// create a new Product
const createEvent = async (formData) => {
  const response = await axios.post(`${API_URL}/create-event`, formData);
  return response.data;
};

//get All eventss
const getEvents = async () => {
  const response = await axios.get(`${API_URL}/all-events`);
  return response.data;
};

// get single events
const getEvent = async (id) => {
  const response = await axios.get(`${API_URL}/event/${id}`);
  return response.data;
};

// delete a events
const deleteEvent = async (id) => {
  const response = await axios.delete(`${API_URL}/delete-event/${id}`);
  return response.data;
};

// update a events
const updateEvent = async (id, formData) => {
  console.log(id);
  console.log(formData);
  const response = await axios.patch(`${API_URL}/update-event/${id}`, formData);
  return response.data;
};

const eventService = {
  createEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent,
};

export default eventService;
