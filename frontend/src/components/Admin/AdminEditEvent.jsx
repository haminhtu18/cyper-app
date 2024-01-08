import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getEvent,
  getEvents,
  selectIsLoading,
  selectEvent,
  updateEvent,
} from "../../redux/features/eventSlice";
import Loader from "../Layout/Loader";
import { CATEGORIES_DATA } from "../../../data";

const AdminEditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  const eventUpdate = useSelector(selectEvent);
  console.log(eventUpdate);
  const [startDate, setStartDate] = useState(() => {
    const prevStartDate = new Date(eventUpdate.start_Date);
    return prevStartDate;
  });

  const [endDate, setEndDate] = useState(() => {
    const prevStartDate = new Date(eventUpdate.finish_Date);
    return prevStartDate;
  });
  const [event, setEvent] = useState(eventUpdate);
  console.log(event);

  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  useEffect(() => {
    setEvent(eventUpdate);
  }, [eventUpdate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
    console.log(event);
  };
  const saveProduct = async (e) => {
    e.preventDefault();
    console.log(event);

    const formData = {
      name: event?.name,
      desc: event?.desc,
      category: event?.category,
      tags: event?.tags,
      currentPrice: event?.currentPrice,
      discountPrice: event?.discountPrice,
      stock: event?.stock,
      start_Date: startDate.toISOString(),
      finish_Date: endDate.toISOString(),
    };
    await dispatch(updateEvent({ id, formData }));
    await dispatch(getEvents());
    navigate("/admin/all-events");
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
            <h5 className="medium-24 text-center">Update Event Product</h5>
            {/* form create event product */}
            <form onSubmit={saveProduct} className="h-full">
              <div>
                <label className="flex pb-1">
                  Name <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={event?.name}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={handleInputChange}
                  placeholder="Enter your event name..."
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
                  name="desc"
                  value={event?.desc}
                  className="mt-2 appearance-none block w-full  px-3 pt-2 border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={handleInputChange}
                  placeholder="Enter your event description..."
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
                  value={event?.category}
                  onChange={handleInputChange}
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
                  value={event?.tags}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={handleInputChange}
                  placeholder="Enter your event tags..."
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
                  value={event?.currentPrice}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={handleInputChange}
                  placeholder="Enter your event name..."
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
                  value={event?.discountPrice}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={handleInputChange}
                  placeholder="Enter your event name..."
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
                  value={event?.stock}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={handleInputChange}
                  placeholder="Enter your event stock..."
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
                  value="Update Product!"
                  className="cursor-pointer hover:shadow-xl active:shadow mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
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

export default AdminEditEvent;
