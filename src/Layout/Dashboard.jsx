import { FaCalendar, FaEnvelope, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

export default function Dashboard() {
  const [cart] = useCart();
  // TODO:  get isAdmin value from the database
  const isAdmin = true
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
              {" "}
              <FaHome></FaHome> User Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              {" "}
              <FaCalendar></FaCalendar> Reservation{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              {" "}
              <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              {" "}
              <MdReviews></MdReviews> Add a Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              {" "}
              <TbBrandBooking></TbBrandBooking> My Bookings
            </NavLink>
          </li>
          {/* shared nav item */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              {" "}
              <FaHome></FaHome> Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              {" "}
              <FaSearch></FaSearch> Menu{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              {" "}
              <FaEnvelope></FaEnvelope> Contact{" "}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
