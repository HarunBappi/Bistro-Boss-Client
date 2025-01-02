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
      <div className="card-body flex flex-col items-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-slate-100 border-0 border-b-4 border-orange-400 mb-6  hover:bg-[#111827] hover:border-orange-400 hover:text-orange-400">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
