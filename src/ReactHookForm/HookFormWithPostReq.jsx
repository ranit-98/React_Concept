import React from "react";
import { useForm } from "react-hook-form";

const HookFormValidation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //console.log(watch(["name", "city", "phone"]));
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>React Hooks Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        Name:
        <input {...register("name", { required: true })} />
        <br />
        {errors.name && <span style={{color:"red"}}>This field is required</span>}
        <br />
        <br />
        Email:
        <input {...register("email", { required: true })} />
        <br />
        {errors.email && <span style={{color:"red"}}>This field is required</span>}
        <br />
        <br />
        City:
        <input
          {...register("city", {
            required: true,
            minLength: 3,
          })}
        />
        <br />
        {errors.city?.type === "required" && (
          <span style={{color:"red"}}>This field is required</span>
        )}
        {errors.city?.type === "minLength" && (
          <span style={{color:"red"}}>The minimum length of the value to accept for this input</span>
        )}
        <br />
        <br />
        phone
        <input
          {...register("phone", {
            required: true,
            minLength: 10,
          })}
        />
        <br />
        {errors?.phone?.type === "required" && <p style={{color:"red"}}>This field is required</p>}
        {errors?.phone?.type === "minLength" && (
          <p style={{color:"red"}}>input phone minimum 10 characters</p>
        )}
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default HookFormValidation;
