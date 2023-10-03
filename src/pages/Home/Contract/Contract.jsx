import { Helmet } from "react-helmet";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaChartBar,
  FaFileContract,
} from "react-icons/fa"; // Import icons
import contract from "../../../assets/contract.png";
import { useState } from "react";
import SubTitle from "../../Shared/SubShare/SubTitle/SubTitle";
const Contract = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contractFile: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div>
      <Helmet>
        <title>Learn Language || Contact</title>
      </Helmet>
      
      <div className="">
      
      <div className="hero min-h-screen bg-base-200">
      
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={contract} className=" ml-40  max-w-sm  shadow-2xl" />
        <div className="container mx-auto mt-8 ">
          <h1 className="text-4xl uppercase font-bold"></h1>
          <SubTitle
        title={"Contact "}
      ></SubTitle>

          <form
            onSubmit={handleSubmit}
            className="bg-emerald-800 text-white  shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="flex ">
              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4 ml-3">
                <label
                  className="block border-2xl text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block  text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block  text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Your message here"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                <FaFileContract />
                <span>Contract</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
      </div>
      

      <div className="container mx-auto my-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-base-100 shadow-xl p-4 rounded-lg">
            <h2 className="text-xl font-semibold">
              <FaEnvelope />
            </h2>
            <p>arfin.cse.green.edu.bd@gmail.com</p>
          </div>
          <div className="bg-base-100 shadow-xl p-4 rounded-lg">
            <h2 className="text-xl font-semibold">
              <FaPhone />
            </h2>
            <p>01952-487468</p>
          </div>
          <div className="bg-base-100 shadow-xl p-4 rounded-lg">
            <h2 className="text-xl font-semibold">
              <FaGlobe />
            </h2>
            <p>
              Website:{" "}
              <a href="https://s-arfin-dev.netlify.app/">
                https://s-arfin-dev.netlify.app/
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-4 text-center">
        <button className="btn btn-primary bg-purple-500 hover:bg-purple-700 text-white">
          <span className="mr-2">
            <FaChartBar /> {/* Icon for Chart */}
          </span>
          View Chart
        </button>
      </div>
    </div>
  );
};

export default Contract;
