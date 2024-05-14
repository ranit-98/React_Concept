import React from 'react'
import { useForm } from 'react-hook-form'

const HookFormValidation = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      console.log(watch(["name","city","phone"]))
    const onSubmit = (data) => console.log(data)
  return (
    <div>
      <h1>React Hooks Form</h1>

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      Name:
      <input {...register("name",{ required: true })} />
      <br/>
      {errors.name && <span>This field is required</span>}
    <br/><br/>
      {/* include validation with required or other standard HTML validation rules */}
      City:
      <input {...register("city", {
         required: true,
         minLength: 2 
         
         })} />
      {/* errors will return when field validation fails  */}
      <br/>
      {errors.city?.type==="required" && <span>This field is required</span>}
      {errors.city?.type==="minLength" && <span>The minimum length of the value to accept for this input</span>}
      <br/><br/>
      phone
      <input {...register("phone", {
         required: true,
         maxLength: 10, 
         })} />
      {/* errors will return when field validation fails  */}
      <br/>
       {errors.phone && <span>Phone filed is required</span>} 
      {errors?.phone?.type === "required" && <p>This field is required</p>}
      {errors?.phone?.type === "maxLength" && (
        <p>input phone minimum 10 characters</p>
      )}
      <br/><br/>
      school
      <input {...register('school',{
        required:true,
        maxLength:3
      })}/>
       {/* errors will return when field validation fails   */}
      {errors?.school?.type==="required" && <p>school filed id required</p>}
      {errors?.school?.type==="maxLength" && <p>maxLength  3</p>}
      <br/>
      
      <br/><br/>
      <input type="submit" />
    </form>
    </div>
  )
}

export default HookFormValidation
