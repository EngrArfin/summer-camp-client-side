import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import google from "../../assets/icon/google.png";

const Register = () => {
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset();

          /* Success */
          Swal.fire({
            position: "top-end",
            icon: " Login success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/");
        })
        .catch((error) => console.log(error));
    });

     /* const handleGoogleSignIn = () => {
      signInWithGoogle()
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
        })
        .catch((error) => {
          console.log(error);
        });
    }; */ 

  };
  return (
    <div>
      <div className="hero mb-2 min-h-screen bg-orange-100">
        <div className="mt-20 hero-content flex-col lg-10">
          <div className="text-center  lg:text-left">
            <h1 className="text-4xl  font-bold uppercase">Please Register Here !</h1>
          </div>
          <div className=" border-spacing-2 w-full max-w-sm bg-red-500">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control flex">
                <label className="label">
                  <span className="label-text ">Full Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Type Name"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Enter email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              {/* Photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password minimum 1 number, Uppercase, lower & special
                    character.
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              
              <div className="form-control mt-6">
                <button className="btn p-4  bg-blue-400">Register</button>
              </div>
            </form>
            <p className="mb-4 ml-8 ">
              Have An Account?
              <Link
                to="/login"
                className=" text-sky-500 p-3 level-text-alt link-hover"
              >
                Log In
              </Link>
            </p>
            {/* signin with Google */}
            <div className="form-control items-center">
              <button onClick={signInWithGoogle} className="btn-circle">
                <img src={google} alt="" className="w-10 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
