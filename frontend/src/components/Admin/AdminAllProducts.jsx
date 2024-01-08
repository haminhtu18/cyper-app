import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProducts,
  selectIsLoading,
  selectProducts,
} from "../../redux/features/productSlice";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import Loader from "../Layout/Loader";

const AdminAllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleDeleteProduct = async (id) => {
    await dispatch(deleteProduct(id));
    await dispatch(getProducts());
  };

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    { field: "name", headerName: "Product Name", minWidth: 150, flex: 1.4 },
    {
      field: "price",
      headerName: "Product Price",
      type: "number",
      minWidth: 100,
      flex: 1.0,
    },
    {
      field: "stock",
      headerName: "Product Stock",
      type: "number",
      minWidth: 100,
      flex: 1.0,
    },
    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 100,
      flex: 1.0,
    },
    {
      field: "preview",
      headerName: "",
      type: "number",
      sorttable: false,
      minWidth: 100,
      flex: 0.8,
      renderCell: (params) => {
        const d = params.row.id;
        // const product_name = d.replace(/\s+/g, "-");
        return (
          <>
            <Link to={`/admin/edit-product/${d}`}>
              <button>
                <AiOutlineEye size={20} />
              </button>
            </Link>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: "",
      type: "number",
      sorttable: false,
      minWidth: 100,
      flex: 0.8,
      renderCell: (params) => {
        const d = params.row.id;
        // const product_name = d.replace(/\s+/g, "-");
        return (
          <>
            <button onClick={() => handleDeleteProduct(d)}>
              <AiOutlineDelete size={20} />
            </button>
          </>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((product) =>
      rows.push({
        id: product._id,
        name: product.name,
        price: "US$" + product.discountPrice,
        stock: product.stock,
        sold: 10,
      })
    );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full pt-1 mt-10 bg-white">
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            pageSizeOptions={[5, 10, 25]}
            disableRowSelectionOnClick
          />
        </div>
      )}
    </>
  );
};

export default AdminAllProducts;
