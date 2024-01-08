import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import Loader from "../Layout/Loader";
import {
  deleteEvent,
  getEvents,
  selectEvents,
  selectIsLoading,
} from "../../redux/features/eventSlice";

const AdminAllEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const handleDeleteProduct = async (id) => {
    await dispatch(deleteEvent(id));
    await dispatch(getEvents());
  };

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    { field: "name", headerName: "Product Name", minWidth: 100, flex: 1 },
    {
      field: "price",
      headerName: "Product Price",
      type: "number",
      minWidth: 60,
      flex: 0.5,
    },
    {
      field: "stock",
      headerName: "Product Stock",
      type: "number",
      minWidth: 60,
      flex: 0.5,
    },
    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 60,
      flex: 0.5,
    },
    {
      field: "start_date",
      headerName: "Start Date",
      type: "number",
      minWidth: 80,
      flex: 0.8,
    },
    {
      field: "finish_date",
      headerName: "Finish Date",
      type: "number",
      minWidth: 80,
      flex: 0.8,
    },
    {
      field: "update",
      headerName: "Update",
      type: "number",
      sorttable: false,
      minWidth: 60,
      flex: 0.5,
      renderCell: (params) => {
        const d = params.row.id;
        // const product_name = d.replace(/\s+/g, "-");
        return (
          <>
            <Link to={`/admin/edit-event/${d}`}>
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
      headerName: "Delete",
      type: "number",
      sorttable: false,
      minWidth: 60,
      flex: 0.5,
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

  events &&
    events.forEach((event) =>
      rows.push({
        id: event._id,
        name: event.name,
        price: "US$" + event.discountPrice,
        stock: event.stock,
        sold: 10,
        start_date: event.start_Date.slice(0, 10),
        finish_date: event.finish_Date.slice(0, 10),
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

export default AdminAllEvents;
