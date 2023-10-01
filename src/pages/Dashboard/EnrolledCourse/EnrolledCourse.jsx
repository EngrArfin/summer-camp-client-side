/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 */

import { Link } from "react-router-dom";

const EnrolledCourse = (/* { service } */) => {
/*   const { _id, name, img, price } = service; */  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        {/* <img src= {img}  alt="Shoes" className="rounded-xl" /> */}
      </figure>
      <div className="card-body ">
        <h2 className="card-title ">Name</h2>
        <p className="text-xl text-orange-500">Price: {/* ${price} */}</p>
        <div className="card-action">
          <Link /* to={`/checkout/${_id}`} */>
            <button className="btn btn-primary">Buy Now </button>
          </Link>
        </div>
      </div>
    </div>
  );
};



export default EnrolledCourse;
