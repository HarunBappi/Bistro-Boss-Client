import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

export default function FoodCard({ item }) {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const Navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddToCart = () => {
    // console.log(food, user.email)
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Added your Cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // Cart Item Updated
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In ",
        text: "Please Login After Add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "YES, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // Navigate to login page
          Navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="image" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCart}
            className="btn bg-slate-100 border-0 border-b-4 border-orange-400 mb-6  hover:bg-[#111827] hover:border-orange-400 hover:text-orange-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
