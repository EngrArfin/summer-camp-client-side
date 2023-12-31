import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import google from '../../assets/icon/google.png'
import Swal from "sweetalert2";


const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/" ;

  const handleLogin = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();

        Swal.fire({
          position: "top-end",
          icon: " Login success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      

      })
      .catch((error) => {
        console.log(error);
      });
  };

  
    /* signin with Google */
  
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
      navigate(from, {replace: true});
      
      
  };
  return (
    <div>
      <div className="hero min-h-screen bg-blue-00">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="mt-8 text-3xl font-bold "> Please login </h1>
          </div>
          <div className="border-2 border-red-500 rounded-lg p-6 mt-6 ">
            <form onSubmit={handleLogin} className = "card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn p-4 text-black-900 bg-blue-400">LogIn</button>
              </div>
            </form>
            <p className="mb-4 ml-8 ">
              Have no account?
              <Link to="/register" className=" text-sky-500 p-3 level-text-alt link-hover">
                 Sign Up
              </Link>
            </p>
            {/* signin with Google */}
            <div className="form-control items-center mt-2 p-3">
              <button onClick={handleGoogleSignIn} className="btn-circle">
                <img src={google} alt="" className="w-10 rounded-full"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
