import { useEffect, useState } from "react";
//import { FaCalendarAlt, FaVideo } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";

const Enrolled = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className="flex flex-wrap">
      {students.map((student) => (
        <div
          key={student._id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 py-2"
        >
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={student.img} alt="Course" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{student.name}</h2>
              <h4 className="card-title">{student.instructor}</h4>
              <div className="badge bg-red-300 ">Price: ${student.price}</div>

              <div className="card-actions  justify-end ">
                <button className="btn btn-primary">
                  <BiSolidVideos></BiSolidVideos> Play Video
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Enrolled;
