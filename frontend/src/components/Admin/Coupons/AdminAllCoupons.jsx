import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import Loader from "../../Layout/Loader";
import {
  deleteCoupon,
  getCoupon,
  getCoupons,
  selectCoupon,
  selectCoupons,
  selectIsLoading,
} from "../../../redux/features/couponSlice";
import AdminCreateCouponForm from "./AdminCreateCouponForm";
import AdminEditCouponForm from "./AdminEditCouponForm";

const AdminAllCoupons = () => {
  const dispatch = useDispatch();
  const coupons = useSelector(selectCoupons);
  const isLoading = useSelector(selectIsLoading);
  const [OpenCreateCoupon, setOpenCreateCoupon] = useState(false);
  const [OpenEditCoupon, setOpenEditCoupon] = useState(false);
  const coupon = useSelector(selectCoupon);
  useEffect(() => {
    dispatch(getCoupons());
  }, [dispatch]);

  const handleDeleteCoupon = async (id) => {
    await dispatch(deleteCoupon(id));
    await dispatch(getCoupons());
  };

  const columns = [
    { field: "id", headerName: "Coupon Id", minWidth: 100, flex: 0.7 },
    { field: "name", headerName: "Coupon Name", minWidth: 100, flex: 0.7 },
    {
      field: "value",
      headerName: "Discount Coupon (%)",
      type: "number",
      minWidth: 100,
      flex: 0.7,
    },
    {
      field: "minAmount",
      headerName: "Min Amount",
      type: "number",
      minWidth: 100,
      flex: 0.7,
    },
    {
      field: "maxAmount",
      headerName: "Max Amount",
      type: "number",
      minWidth: 100,
      flex: 0.7,
    },
    {
      field: "eidt",
      headerName: "Edit",
      type: "number",
      sorttable: false,
      minWidth: 100,
      flex: 0.8,
      renderCell: (params) => {
        const d = params.row.id;
        // const product_name = d.replace(/\s+/g, "-");
        return (
          <>
            <div
              onClick={async () => {
                await dispatch(getCoupon(d));
                setOpenEditCoupon(true);
              }}
            >
              <button>
                <AiOutlineEye size={20} />
              </button>
            </div>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      type: "number",
      sorttable: false,
      minWidth: 100,
      flex: 0.8,
      renderCell: (params) => {
        const d = params.row.id;
        // const product_name = d.replace(/\s+/g, "-");
        return (
          <>
            <button onClick={() => handleDeleteCoupon(d)}>
              <AiOutlineDelete size={20} />
            </button>
          </>
        );
      },
    },
  ];

  const rows = [];

  coupons &&
    coupons.forEach((coupon) =>
      rows.push({
        id: coupon._id,
        name: coupon.name,
        value: coupon.value,
        minAmount: coupon.minAmount,
        maxAmount: coupon.maxAmount,
      })
    );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full bg-white">
            <div className="py-5 flex justify-between mx-10">
              <h1 className="medium-24">Coupons</h1>
              <div
                className="py-2 px-4 border rounded-lg cursor-pointer"
                onClick={() => setOpenCreateCoupon(true)}
              >
                Create Coupon
              </div>
            </div>
            <DataGrid
              rows={rows}
              columns={columns}
              autoHeight
              pageSizeOptions={[5, 10, 25]}
              disableRowSelectionOnClick
            />
          </div>
          {OpenCreateCoupon && (
            <AdminCreateCouponForm setOpenCreateCoupon={setOpenCreateCoupon} />
          )}
          {OpenEditCoupon && (
            <AdminEditCouponForm
              setOpenEditCoupon={setOpenEditCoupon}
              coupon={coupon}
            />
          )}
        </>
      )}
    </>
  );
};

export default AdminAllCoupons;
