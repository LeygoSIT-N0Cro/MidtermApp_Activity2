import { useState } from "react";

function StudentForm({ addStudent }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!name) newErrors.name = "Name is required";

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Invalid email format";
    }

    if (!course) newErrors.course = "Course is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      addStudent({ id: Date.now(), name, email, course });
      setName("");
      setEmail("");
      setCourse("");
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && <p>{errors.name}</p>}

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p>{errors.email}</p>}

      <input
        type="text"
        placeholder="Course"
        onChange={(e) => setCourse(e.target.value)}
      />
      {errors.course && <p>{errors.course}</p>}

      <button type="submit">Submit</button>

    </form>
  );
}

export default StudentForm;