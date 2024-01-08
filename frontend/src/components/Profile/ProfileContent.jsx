import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/authSlice";
import { useEffect, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ProfileContent = ({ active }) => {
  const user = useSelector(selectUser);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phone, setPhone] = useState(user && user.phone);
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full ">
      {/* Profile */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={user?.photo.url}
                alt="photoUser"
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
              />
              <div className="absolute bg-[#E3E9FE] rounded-full bottom-0 right-2 flex items-center justify-center cursor-pointer">
                <AiOutlineCamera size={30} />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full flex flex-col lg:flex-row pb-3">
                <div className="lg:w-1/2 w-full pb-3 lg:pb-0">
                  <label className="block pb-2">Full Name:</label>
                  <input
                    type="text"
                    className=" !w-[95%] py-1 border rounded-[5px] px-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="lg:w-1/2 w-full">
                  <label className="block pb-2">Email Address:</label>
                  <input
                    type="text"
                    className=" !w-[95%] py-1 border rounded-[5px] px-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full py-1">
                <div className="lg:w-1/2 w-full">
                  <label className="block pb-2">Phone Number:</label>
                  <input
                    type="number"
                    className=" !w-[95%] py-1 border  rounded-[5px] px-2"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full py-1">
                <div className="lg:w-1/2 w-full">
                  <label className="block pb-2">Address: </label>
                  <input
                    type="text"
                    className=" !w-[95%] py-3 border  rounded-[5px] px-2"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="py-2 px-4 bg-slate-500 rounded-lg text-white mt-4"
              >
                Update Profile
              </button>
            </form>
          </div>
        </>
      )}
      {/* Order */}
      {active === 2 && (
        <>
          <div>
            <AllOrders />
          </div>
        </>
      )}
      {/* Refunds */}
      {active === 3 && (
        <>
          <div>
            <AllRefundOrders />
          </div>
        </>
      )}
      {/* Track Orders */}
      {active === 4 && (
        <>
          <div>
            <TrackOrder />
          </div>
        </>
      )}
      {/* Payment Method */}
      {active === 5 && (
        <>
          <div>
            <PaymentMethod />
          </div>
        </>
      )}
      {/* Address */}
      {active === 6 && (
        <>
          <div>
            <Address />
          </div>
        </>
      )}
    </div>
  );
};

const AllOrders = () => {
  const orders = [
    {
      _id: "134513sdafsdvb4325",
      order_Items: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      total: 120,
      orderStatus: "Processing",
    },
  ];
  const column = [
    { field: "id", headerName: "Order ID", minWidth: 130, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      sorttable: false,
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "stutus") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
    },
    {
      field: "itemQuantity",
      headerName: "Item Quantity",
      minWidth: 130,
      type: "number",
      flex: 0.7,
      sorttable: false,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.7,
      sorttable: false,
    },
    {
      field: "",
      headerName: "",
      minWidth: 150,
      flex: 1,
      type: "number",
      sorttable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((order) => {
      row.push({
        id: order._id,
        itemQuantity: order.order_Items.length,
        total: order.total,
        status: order.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={column}
        autoHeight
        pageSizeOptions={10}
        disableRowSelectionOnClick
      />
    </div>
  );
};

const AllRefundOrders = () => {
  const orders = [
    {
      _id: "134513sdafsdvb4325",
      order_Items: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      total: 120,
      orderStatus: "Processing",
    },
  ];
  const column = [
    { field: "id", headerName: "Order ID", minWidth: 130, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      sorttable: false,
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "stutus") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
    },
    {
      field: "itemQuantity",
      headerName: "Item Quantity",
      minWidth: 130,
      type: "number",
      flex: 0.7,
      sorttable: false,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.7,
      sorttable: false,
    },
    {
      field: "",
      headerName: "",
      minWidth: 150,
      flex: 1,
      type: "number",
      sorttable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((order) => {
      row.push({
        id: order._id,
        itemQuantity: order.order_Items.length,
        total: order.total,
        status: order.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={column}
        autoHeight
        pageSizeOptions={10}
        disableRowSelectionOnClick
      />
    </div>
  );
};

const TrackOrder = () => {
  const orders = [
    {
      _id: "134513sdafsdvb4325",
      order_Items: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      total: 120,
      orderStatus: "Processing",
    },
  ];
  const column = [
    { field: "id", headerName: "Order ID", minWidth: 130, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      sorttable: false,
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "stutus") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
    },
    {
      field: "itemQuantity",
      headerName: "Item Quantity",
      minWidth: 130,
      type: "number",
      flex: 0.7,
      sorttable: false,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.7,
      sorttable: false,
    },
    {
      field: "",
      headerName: "",
      minWidth: 150,
      flex: 1,
      type: "number",
      sorttable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((order) => {
      row.push({
        id: order._id,
        itemQuantity: order.order_Items.length,
        total: order.total,
        status: order.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={column}
        autoHeight
        pageSizeOptions={10}
        disableRowSelectionOnClick
      />
    </div>
  );
};

const PaymentMethod = () => {
  return (
    <div className="w-full px-5">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-semibold text-red-500 pb-2">
          Payment Methods
        </h1>
        <div className="rounded-md w-[120px] bg-black h-[50px] my-3 flex items-center justify-center cursor-pointer">
          <span className="text-white">Add New</span>
        </div>
      </div>
      <br />
      <div className="w-full h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <img
            src="https://www.svgrepo.com/show/333620/visa.svg"
            width={32}
            alt="visa"
          />
          <h5 className="pl-5 font-semibold">Minh Tu</h5>
        </div>
        <div className="flex items-center pl-8">
          <h6>1234 **** *** ****</h6>
          <h5 className="pl-6">06/2022</h5>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const Address = () => {
  return (
    <div className="w-full px-5">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-semibold text-red-500 pb-2">My Address</h1>
        <div className="rounded-md w-[120px] bg-black h-[50px] my-3 flex items-center justify-center cursor-pointer">
          <span className="text-white">Add New</span>
        </div>
      </div>
      <br />
      <div className="w-full h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <h5 className="pl-5 font-semibold">Default</h5>
        </div>
        <div className="flex items-center pl-8">
          <h6>192 Nguyen Tri Phuong An Binh Di An Binh Duong</h6>
        </div>
        <div className="flex items-center pl-8">
          <h5>(83) 902 807 346</h5>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
