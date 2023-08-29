const MenuItem = ({ item }) => {
  const { name, instructor, image, price, schedule, description } = item;
  return (
    <div className="flex gap-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" className="" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
