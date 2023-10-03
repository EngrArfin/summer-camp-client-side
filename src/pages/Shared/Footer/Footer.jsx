import LearningMain from "../../../assets/icon/LearningMain.jpg";

import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="body m-5  ">
      <footer className="footer p-3 bg-custom-dark mt-3 uppercase ">
        <div>
          <img src={LearningMain} alt="" className="w-10 rounded-full" />
          <h2 className="uppercase font-bold ">
            Learning <span className="text-red-800">Language</span>{" "}
          </h2>
          <div className="divider text-red-600"></div>
          <p>Learning Language Academy service star 2012</p>
          <p>Opening Time:</p>
          <p>Mon-Thurs 10:00 AM - :9:00 Pm</p>
          <p>Fri 09:00 AM - 11:59 AM</p>
        </div>

        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Spoken English</a>
          <a className="link link-hover">IELTS</a>
          <a className="link link-hover">Kit English Learn</a>
          <a className="link link-hover">English Grammer</a>
        </div>
        <div>
          <span className="footer-title">Contract</span>
          <a className="link link-hover">arfin.cse.green.edu.bd@gmail.com</a>
          <a className="link link-hover">Phone: +880 192475639</a>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/ArfinSamsel">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/@sa10macademyyt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://web.facebook.com/engrarfin/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
          <div className="w-full max-w-xs m-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-red-500 rounded-md outline-none"
            />
            <button
              type="submit"
              className="btn btn-nav hover:bg-blue-500 hover:text-white mt-4"
            >
              Subscribe
            </button>
          </div>
        </div>
      </footer>

      <footer className="footer footer-center p-4  bg-sky-200 text-base-content">
        <div>
          <p>Copyright © {year} - All right Learning Language</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
