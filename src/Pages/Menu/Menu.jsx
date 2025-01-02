import { Helmet } from "react-helmet-async";
import menuImage from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import Cover from "../Shared/Cover/Cover";
import MenuCategory from "./MenuCategory";

export default function Menu() {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const salads = menu.filter(item => item.category === 'salad')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main Cover */}
      <Cover img={menuImage} title="Our Menu" desc={"By creating backstories that evoke emotions and memories and by tying them to the history or culture of your restaurant, you can create a sense of nostalgia. Discuss with your chef which dishes you offer have an interesting history of creation and which recipe has a captivating story."}></Cover>
      {/* Offer Item */}
      <SectionTitle
        subHeading="Dont's Miss"
        heading="Today's Offer"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert Item */}
      <MenuCategory
      items={desserts}
      title="dessert"
      desc={"Dessert is a course that concludes a meal. The course consists of sweet foods, such as cake, biscuit, ice cream and possibly a beverage such as dessert wine and liqueur."}
      img={dessertImg}
      ></MenuCategory>
      {/* Pizzas Item */}
      <MenuCategory items={pizzas} title="pizza" desc={"Pizza is a dish of Italian origin that consists of a flattened disk of bread dough that is topped with a variety of ingredients12. The toppings can vary greatly and can be customized to individual preferences2."} img={pizzaImg}></MenuCategory>
      {/* Salads Item */}
      <MenuCategory items={salads} title="salad" desc={"A salad is a dish consisting of mixed ingredients, frequently vegetables. They are typically served chilled or at room temperature, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are used to make a salad"} img={saladImg}></MenuCategory>
      {/* Soups Item */}
      <MenuCategory items={soups} title='soup' desc={"Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients of meat or vegetables with stock, milk, or water. Hot soups are additionally characterized by boiling or simmering solid ingredients in liquids in a pot until the flavors are extracted, forming a broth. Soups are similar to stews, and in some cases there may not be a clear distinction between the two; however, soups generally have more liquid (broth) than stews"} img={soupImg}></MenuCategory>
    </div>
  );
}
