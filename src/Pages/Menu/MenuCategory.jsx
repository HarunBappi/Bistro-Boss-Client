import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";

export default function MenuCategory({ items, title, img, desc }) {
  return (
    <div className="mt-8">
      {title && <Cover img={img} title={title} desc={desc}></Cover>}
      <div className="grid md:grid-cols-2 gap-4  my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center  mt-6">
        <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mb-6">
          Order Your Favorite Food
        </button>
        </Link>
      </div>
    </div>
  );
}
