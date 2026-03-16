import { useParams } from "react-router-dom";

function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return <div>Student not found.</div>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Course:</strong> {student.course}</p>
    </div>
  );
}

export default StudentDetails;