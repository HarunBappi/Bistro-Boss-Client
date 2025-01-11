import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const onSubmit = async (data) => {
    console.log(data);
    // Image upload to imagebb and then get url
    const imageFile = {image : data.image[0]} 
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers : {
             'content-type' : 'multipart/form-data'
        }
    } )
    if(res.data.success){
        const menuItem = {
            name : data.name,
            category : data.category,
            price : parseFloat(data.price),
            recipe : data.recipe,
            image : res.data.data.display_url
        }
        const menuRes = await axiosSecure.post('/menu', menuItem)
            reset()
        if(menuRes.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title:`${data.name} added successfull!`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log("with image URL", res.data)
  };
  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="What's New"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              type="text"
              placeholder="Enter Recipe Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-6 my-6">
            {/* Category */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            {/* Price */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="text"
                placeholder="Enter Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Recipe Details */}
          <label className="form-control my-6">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
              {...register("recipe", { required: true })}
            ></textarea>
          </label>
          {/* Upload image */}
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn">
            Add Item<FaUtensils className="ml-2"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
