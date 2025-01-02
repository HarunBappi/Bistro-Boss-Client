import { Helmet } from "react-helmet-async";
import CallUs from "../../../Components/CallUs/CallUs";
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
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  )
}
