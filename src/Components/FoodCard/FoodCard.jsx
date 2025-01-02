export default function FoodCard({item}) {
    const {name, image, price, recipe} = item
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="image"
        />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
      <div className="card-body">
        <h2 className="text-center text-xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
