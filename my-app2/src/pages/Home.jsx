import StudentList from "../components/StudentList";

function Home({ students }) {
  return (
    <div>
      <h1>Student List</h1>
      <StudentList students={students} />
    </div>
  );
}

export default Home;