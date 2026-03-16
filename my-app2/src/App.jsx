import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import StudentDetails from "./components/StudentDetails";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home students={students} />} />
        <Route path="/register" element={<Register addStudent={addStudent} />} />
        <Route path="/student/:id" element={<StudentDetails students={students} />} />
      </Routes>

    </Router>
  );
}

export default App;