import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../Layout/Loader";
import { CATEGORIES_DATA } from "../../../data";
import { createEvent, selectIsLoading } from "../../redux/features/eventSlice";

const AdminCreateEvent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Phones");
  const [tags, setTags] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      createEvent({
        name,
        desc: description,
        category,
        tags,
        currentPrice,
        discountPrice,
        stock,
        start_Date: startDate.toISOString(),
        finish_Date: endDate.toISOString(),
      })
    );
  };
  const handleStartDateChange = (e) => {
    const startDate = new Date(e.target.value);
    const minEndDate = new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000);
    setStartDate(startDate);
    setEndDate(null);
    document.getElementById("end-date").min = minEndDate.toISOString.slice(
      0,
      10
    );
  };

  const handleEndDateChange = (e) => {
    const endDate = new Date(e.target.value);
    setEndDate(endDate);
  };

  const today = new Date().toISOString().slice(0, 10);

  const minEndDate = startDate
    ? new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10)
    : today;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full flex h-full  items-center justify-center">
          <div className="lg:w-3/5 w-4/5 h-[90vh] overflow-y-scroll bg-white shadow p-5 rounded ">
            <h5 className="medium-24 text-center">Create Event</h5>
            {/* form create event */}
            <form onSubmit={handleSubmit} className="h-full">
              <div>
                <label className="flex pb-1">
                  Name <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your product name..."
                />
              </div>
              <br />
              <div>
                <label className="flex pb-1">
                  Description <span className="text-red-600">*</span>{" "}
                </label>
                <textarea
                  cols="30"
                  required
                  rows="8"
                  type="text"
                  name="description"
                  value={description}
                  className="mt-2 appearance-none block w-full px-3 pt-2 border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter your event product description..."
                ></textarea>
              </div>
              <br />
              <div>
                <label className="flex pb-1">
                  Category <span className="text-red-600">*</span>{" "}
                </label>
                <select
                  className="w-full border mt-2 rounded h-[35px]"
                  name="category"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {CATEGORIES_DATA.map((i) => (
                    <option value={i.name} key={i.id}>
                      {i.name}
                    </option>
                  ))}
                </select>
              </div>
              <br />
              <div>
                <label className="flex pb-1">
                  Tags <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  required
                  type="text"
                  name="tags"
                  value={tags}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Enter your event product tags..."
                />
              </div>
              <br />
              <div>
                <label className="flex pb-1">
                  Current Price <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  required
                  type="number"
                  name="currentPrice"
                  value={currentPrice}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={(e) => setCurrentPrice(e.target.value)}
                  placeholder="Enter your event product name..."
                />
              </div>
              <br />
              <div>
                <label className="flex pb-1">
                  Price(Discount) <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  required
                  type="number"
                  name="discountPrice"
                  value={discountPrice}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  placeholder="Enter your product name..."
                />
              </div>
              <br />
              <div>
                <label className="flex pb-1">
                  Event Stock <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  required
                  type="number"
                  name="stock"
                  value={stock}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="Enter your product stock..."
                />
              </div>
              <br />
              <div>
                <label className="flex pb-1">
                  Event Start Date <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  required
                  type="date"
                  name="startDate"
                  id="start-date"
                  value={startDate ? startDate.toISOString().slice(0, 10) : ""}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={handleStartDateChange}
                  min={today}
                  placeholder="Enter your product stock..."
                />
              </div>
              <br />
              <div>
                <label className="flex pb-1">
                  Event End Date <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  required
                  type="date"
                  name="endDate"
                  id="end-date"
                  value={endDate ? endDate.toISOString().slice(0, 10) : ""}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={handleEndDateChange}
                  min={minEndDate}
                  placeholder="Enter your product stock..."
                />
              </div>
              {/* <div>
              <label className="flex pb-1">
                Upload Images <span className="text-red-600">*</span>{" "}
              </label>
              <input
                type="file"
                className="hidden"
                multiple
                name=""
                id="upload"
                onChange={handleImageChange}
              />
              <div className="flex w-full flex-wrap gap-2 items-center">
                <label htmlFor="upload">
                  <AiOutlinePlusCircle
                    size={30}
                    className=" cursor-pointer"
                    color="#555"
                  />
                </label>
                {images &&
                  images.map((image) => (
                    <img
                      src={URL.createObjectURL(image)}
                      key={image}
                      alt=""
                      className="h-[120px] w-[120px] object-cover m-2"
                    />
                  ))}
              </div>
            </div> */}
              <br />
              <div>
                <input
                  type="submit"
                  value="Create Event"
                  className="cursor-pointer hover:shadow-xl active:shadow mt-2 appearance-none block w-full px-3 h-[45px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                />
              </div>
              <br />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminCreateEvent;
