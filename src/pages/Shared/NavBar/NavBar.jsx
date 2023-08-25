import arf from '../../../assets/icon/correct.png'

const NavBar = () => {


  const navOption = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>All Course</a>
        {/* <ul className="p-1">
          <li>
            <a>Course List</a>
          </li>
          <li>
            <a>Course Details</a>
          </li>
        </ul> */}
      </li>
      <li>
        <a>Blog Class</a>
        {/* <ul className="p-1">
          <li>
            <a>Class Video</a>
          </li>
          <li>
            <a>Class Live</a>
          </li>
        </ul> */}
      </li>
      <li>
        <a>Pages</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Contract</a>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar max-w-8xl fixed z-10 bg-opacity-60 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl ">Learning Course</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        

        <div className="navbar-end p-12">

        <a className="btn p-4">Enrollment</a>

        <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>

    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={arf} />
        </div>
      </label>
        </div>

      </div>
    </>
  );
};

export default NavBar;
