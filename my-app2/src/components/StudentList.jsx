import { Link } from "react-router-dom";

function StudentList() {

  const students = [
    { id: 1, name: "Alice", course: "BSIT" },
    { id: 2, name: "Bob", course: "BSCS" }
  ];

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>{student.course}</p>

          <Link to={`/student/${student.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default StudentList;