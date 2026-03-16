
import StudentForm from "../components/StudentForm";

function Register({ addStudent }) {
  return (
    <div>
      <h1>Register Student</h1>
      <StudentForm addStudent={addStudent} />
    </div>
  );
}

export default Register;