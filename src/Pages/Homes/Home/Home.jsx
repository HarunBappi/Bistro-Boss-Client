import { Helmet } from "react-helmet-async";
import bistroImg from '../../../assets/home/bistroBoss.jpg';
import CallUs from "../../../Components/CallUs/CallUs";
import Cover from "../../Shared/Cover/Cover";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonial from "./Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Cover img={bistroImg} title="Bistro Boss" desc={"Bistro Boss is a comprehensive restaurant management website built using the MERN stack (MongoDB, Express.js, React with Vite, and Node.js). This application aims to streamline restaurant operations, providing an intuitive interface for managing reservations, orders, menus, and staff."}></Cover>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  )
}
