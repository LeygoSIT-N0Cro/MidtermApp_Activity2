import { Link } from "react-router-dom";

function StudentList({ students }) {
  return (
    <div>
      {students.length === 0 ? (
        <p>No students registered.</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <Link to={`/student/${student.id}`}>{student.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;