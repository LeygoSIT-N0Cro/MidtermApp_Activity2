import { useForm } from "react-hook-form";

function StudentForm() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        placeholder="Name"
        {...register("name", { required: "Name is required" })}
      />
      <p>{errors.name?.message}</p>

      <input
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format"
          }
        })}
      />
      <p>{errors.email?.message}</p>

      <input
        placeholder="Course"
        {...register("course", { required: "Course is required" })}
      />
      <p>{errors.course?.message}</p>

      <button type="submit">Submit</button>

    </form>
  );
}

export default StudentForm;