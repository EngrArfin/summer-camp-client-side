import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {

  const { user, createUser } = useContext(AuthContext);

 

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createUser(email, password,photo)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })

      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div>
      <div className="hero min-h-screen bg-orange-300">
        <div className="hero-content flex-col lg-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold uppercase">Register Here !</h1>
          </div>
          <div className="card w-full max-w-sm bg-red-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control flex">
                <label className="label">
                  <span className="label-text ">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type Name"
                  className="input input-bordered"
                  required
                />
                
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="input input-bordered"
                  required
                />
              </div>
              
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Photo URL</span>
                </label>                
                <input type="file" name="photo" id="" required />

                <label className="label ">Already have an account?
                  <Link to="/login" className="label-text-alt link-hover">
                    Login
                  </Link>
                </label>

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary ">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
