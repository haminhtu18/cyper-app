import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProduct,
  getProducts,
  selectIsLoading,
  selectProduct,
  updateProduct,
} from "../../redux/features/productSlice";
import Loader from "../Layout/Loader";
import { CATEGORIES_DATA } from "../../../data";

const AdminEditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  const productUpdate = useSelector(selectProduct);
  const [product, setProduct] = useState(productUpdate);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    setProduct(productUpdate);
  }, [productUpdate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    console.log(product);
  };
  const saveProduct = async (e) => {
    e.preventDefault();
    console.log(product);

    const formData = {
      name: product?.name,
      desc: product?.desc,
      category: product?.category,
      tags: product?.tags,
      currentPrice: product?.currentPrice,
      discountPrice: product?.discountPrice,
      stock: product?.stock,
    };
    await dispatch(updateProduct({ id, formData }));
    await dispatch(getProducts());
    navigate("/admin/all-products");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full flex h-full  items-center justify-center">
          <div className="lg:w-3/5 w-4/5 h-[90vh] overflow-y-scroll bg-white shadow p-5 rounded ">
            <h5 className="medium-24 text-center">Update Product</h5>
            {/* form create product */}
            <form onSubmit={saveProduct} className="h-full">
              <div>
                <label className="flex pb-1">
                  Name <span className="text-red-600">*</span>{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={product?.name}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={handleInputChange}
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
                  name="desc"
                  value={product?.desc}
                  className="mt-2 appearance-none block w-full  px-3 pt-2 border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={handleInputChange}
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
                  value={product?.category}
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
                  value={product?.tags}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={handleInputChange}
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
                  value={product?.currentPrice}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={handleInputChange}
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
                  value={product?.discountPrice}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={handleInputChange}
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
                  value={product?.stock}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
                  onChange={handleInputChange}
                  placeholder="Enter your product stock..."
                />
              </div>
              <br />
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

export default AdminEditProduct;
