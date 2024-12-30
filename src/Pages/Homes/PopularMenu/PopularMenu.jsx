import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


export default function PopularMenu() {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data => setMenu(data))
    },[])
  return (
    <section>
      <SectionTitle
      subHeading="Check it Out"
      heading="form our menu"
      >
      </SectionTitle>
    </section>
  )
}
