import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

export default function SignUp() {
  const {
    register,
    handleSubmit, reset, formState: { errors }, } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
  const onSubmit = (data) =>{
     console.log(data)
     createUser(data.email, data.password)
     .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
        updateUserProfile(data.name, data.photoURL)
        .then(()=>{
            console.log("user updated Successfully")
            reset()
            Swal.fire({
                position:"top-right",
                icon: "success",
                title: "user signup successfull",
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/')
        })
        .catch(error => {
            console.log(error.message)
        })
     })
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
        <Helmet>
            <title> Bistro Boss | Sign Up </title>
        </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse md:w-10/12">
        <div className="text-center lg:text-left ">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-3/4 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {required: true })}
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
               {errors.name && <span className="text-red-600 py-1">Name is required</span>}
            </div>
             <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", {required: true })}
                placeholder="photoURL"
                className="input input-bordered"
                required
              />
               {errors.photoURL && <span className="text-red-600 py-1">Photo URL is required</span>}
            </div> 
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
               {errors.email && <span className="text-red-600 py-1">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {required: true, minLength:6,
                     maxLength:20,
                    pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$)/})}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            {errors.password?.type=== 'required' && <span className="text-red-600 py-1">Password is required</span>}
            {errors.password?.type=== 'minLength' && <span className="text-red-600 py-1">Password must be 6 characters</span>}
            {errors.password?.type=== 'maxLength' && <span className="text-red-600 py-1">Password must be less then 20 characters</span>}
            {errors.password?.type=== 'pattern' && <span className="text-red-600 py-1">Password must have one UpperCase, one LowerCase, one digit & one special characters</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p><small>Already register? <Link to="/login">Go to Login</Link></small></p>
        </div>
      </div>
    </div>
  );
}
