import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CATEGORIES_DATA } from "../../../data";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  createProduct,
  getProducts,
  selectIsLoading,
} from "../../redux/features/productSlice";
import productService from "../../services/productService";
import axios from "axios";
import Loader from "../Layout/Loader";

const AdminCreateProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [images, setImages] = useState([]);
  console.log(images);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Phones");
  const [tags, setTags] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    images.forEach((image) => {
      formData.set("images", image);
    });
    console.log(images);
    formData.append("name", name);
    formData.append("desc", description);
    formData.append("category", category);
    formData.append("tags", tags);
    formData.append("currentPrice", currentPrice);
    formData.append("discountPrice", discountPrice);
    formData.append("stock", stock);
    console.log(...formData);
    await dispatch(
      createProduct({
        name,
        desc: description,
        category,
        tags,
        currentPrice,
        discountPrice,
        stock,
        images,
      })
    );
    await dispatch(getProducts());
    navigate("/admin/all-products");
  };
  const handleImageChange = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full flex h-full  items-center justify-center">
          <div className="lg:w-3/5 w-4/5 h-[90vh] overflow-y-scroll bg-white shadow p-5 rounded ">
            <h5 className="medium-24 text-center">Create Product</h5>
            {/* form create product */}
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
                  placeholder="Enter your product description..."
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
                  placeholder="Enter your product tags..."
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
                  placeholder="Enter your product name..."
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
                  Product Stock <span className="text-red-600">*</span>{" "}
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
                  Upload Images <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  type="file"
                  className="hidden"
                  multiple
                  name="iamges"
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
                    images.map((i) => (
                      <img
                        src={i}
                        key={i}
                        alt=""
                        className="h-[120px] w-[120px] object-cover m-2"
                      />
                    ))}
                </div>
              </div>
              <br />
              <div>
                <input
                  type="submit"
                  value="Create"
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

export default AdminCreateProduct;
