import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../../assets/home/featured.jpg';

export default function Featured() {
  return (
    <div className="bg-cover bg-center bg-fixed text-white my-16" style={{backgroundImage: `url(${featuredImg})`}}>
        <SectionTitle
        subHeading='Check it Out'
        heading="Featured items"
        ></SectionTitle>
      <div className="md:flex justify-center items-center py-8 px-16 bg-slate-500 bg-opacity-40">
        <div>
            <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
            <p>Aug 29, 2029</p>
            <p className="uppercase">where can i get some?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur optio maxime id quasi corporis veritatis quam, quaerat magnam deleniti!</p>
            <button className="btn btn-outline mt-4 text-white border-0 border-b-4 border-yellow-600">Order Now</button>
        </div>
      </div>
    </div>
  )
}
