import { Helmet } from "react-helmet";
import { FaPhone, FaEnvelope, FaGlobe, FaChartBar } from "react-icons/fa"; // Import icons
import contract from '../../../assets/contract.png'
const Contract = () => {
  return (
    <div>
      <Helmet>
        <title>Learn Language || Contact</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={contract}
            className="max-w-sm  shadow-2xl"
          />
          <div>
            <h1 className="text-4xl uppercase font-bold">Contact Us</h1>
            <h2 className="py-6">
            Learning a new language during winter vacation can be a productive and enjoyable way to spend your time. Here are some tips to help you make the most of your language learning during the winter break
            </h2>
            <button className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white">
              <span className="mr-2">
                <FaPhone />
              </span>
              Contact Here
            </button>
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
              Website: <a href="https://s-arfin-dev.netlify.app/">https://s-arfin-dev.netlify.app/</a>
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
