import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

export default function PopularMenu() {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-10">
      <SectionTitle
        subHeading="Popular Items"
        heading="form our menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center  mt-6">
        <button className="btn btn-outline border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
}
