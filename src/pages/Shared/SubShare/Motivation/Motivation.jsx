import img from "../../../../assets/Instractor/teache1.jpg";
import SubTitle from "../SubTitle/SubTitle";

const Motivation = () => {
  return (
    <section className="py-18">
      <SubTitle
        title={"Popular Motivation"}
        subTitle={"Jeffrey crikey victoria sponge mush spiffing ."}
      ></SubTitle>
      <div className="hero min-m-screen bg-white-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img}
            className="max-w-2xl rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl uppercase">Motivation</h1>
            <p className="py-6 uppercase">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. 
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
