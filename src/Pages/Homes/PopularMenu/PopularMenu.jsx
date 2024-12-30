import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


export default function PopularMenu() {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
  return (
    <section className="mb-10">
      <SectionTitle
      subHeading="Popular Items"
      heading="form our menu"
      >
      </SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {
            menu.map(item => <MenuItem
            key={item._id}
            item = {item}
            ></MenuItem>)
        }
       <div className="flex justify-end -mr-10 mt-2">
       <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
       </div>
      </div>
    </section>
  )
}
