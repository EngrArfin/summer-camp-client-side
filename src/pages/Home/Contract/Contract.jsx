import { Helmet } from "react-helmet";

const   Contract = () => {
  return (
    <div>
      <Helmet>
        <title>Learn Language || Contract </title>
      </Helmet>
      <div>
        <div className="hero min-h      -screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="/public/contract.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Contract Us </h1>
              <p className="py-6">
                {" "}
                Online voting system is a software platform that allows groups
                to securely conduct votes and elections.Create an election for
                your school or organization in seconds. Voters can vote from any
                location
              </p>
              <button className="btn btn-primary">Contract Here</button>
            </div>
          </div>
        </div>
      </div>

      {/* Contract Form */}
      <div className="disply:center">
        <div className="bg-center flex p-4 m-3">
          <div className="card card-compact w-96 bg-base-100 shadow-xl p-3 m-3">
            <div className="card-body">
              <h2 className="card-title">Address</h2>
              <p>House 23, Road 20. Banani </p>
              <p>Dhaka 1213.</p>
              <p>Bangladesh</p>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl p-3 m-3">
            <div className="card-body">
              <h2 className="card-title">Contract Info</h2>
              <p>Gmail: onlinevote@gmail.com </p>
              <p>Phone: 01954376453</p>
              <p>www.onlinevote.com/vote</p>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl p-3 m-3">
            <div className="card-body">
              <h2 className="card-title">Go For Chat</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Chat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
