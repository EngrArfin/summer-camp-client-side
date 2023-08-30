import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import google from '../../assets/icon/google.png'

import Swal from "sweetalert2";

const SignUp = () => {
 
  const {register, handleSubmit,reset,  formState: { errors }} = useForm();
  const {  createUser ,signInWithGoogle, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
      .then(() => {
        console.log('user profile info updated')
        reset();

        /* Success */
        Swal.fire({
          position: "top-end",
          icon: " Login success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch(error => console.log(error));
    })
    const handleGoogleSignIn = () => {
      signInWithGoogle()
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
        })
        .catch((error) => {
          console.log(error);
        });
      }
  };
  /* navigate('/'); */
  return (
    <div>
      <div className="hero min-h-screen bg-orange-300">
        <div className="hero-content flex-col lg-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold uppercase">Register Here !</h1>
          </div>
          <div className="card w-full max-w-sm bg-red-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control flex">
                <label className="label">
                  <span className="label-text ">Full Name</span>
                </label>
                <input
                  type="text"
                  {...register("name",{ required: true })}
                  name="name"
                  placeholder="Type Name"
                  className="input input-bordered"
                  required
                />
                {errors.name && <span className="text-red-600">Name is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email",{ required: true })}
                  name="email"
                  placeholder="Enter email"
                  className="input input-bordered"
                  required
                />
                {errors.email && <span className="text-red-600">Name is required</span>}
              </div>
              {/* Photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Photo URL</span>
                </label>
                <input
                  type="email"
                  {...register("photoURL",{ required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password",{ required: true,minLength: 6, maxLength: 20 })}
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && 
        <p className="text-red-600">Password is required</p>}
                
              </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text ">Photo URL</span>
                </label>
                <input type="file" {...register("photo")} name="photo" id="" required />

                <label className="label ">
                  Already have an account?
                  <Link to="/login" className="label-text-alt link-hover">
                    Login
                  </Link>
                </label>
              </div> 
              <div className="form-control items-center mt-6">
                <Link className="btn p-4  bg-blue-400">Register</Link>
              </div>
            </form>
            {/* signin with Google */}
            <div className="form-control items-center mt-2 p-3">
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

export default SignUp;
