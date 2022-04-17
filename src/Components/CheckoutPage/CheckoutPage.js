import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
// import { yupResolver } from "@hookform/resolvers/yup";
import './CheckoutPage'

// const SignupSchema = yup.object().shape({
//     firstName:yup.string().required(),
//     age: yup.number().required().positive().integer(),
//     website:yup.string().url()
//   });

const CheckoutPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        // resolver: yupResolver(SignupSchema)
      });
      const onSubmit = (data) => {
          if(data){
            toast.success(JSON.stringify('thank you for the bookin'))
          }
            
        
            
        
      };
    return (
        <div className='container w-50 mt-5 bg-info text-white rounded shadow-lg p-3 mb-5 rounded'>
            <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label for="exampleFormControlInput1" class="form-label"> Name</label>
        <input {...register("firstName")} type="text" class="form-control" placeholder="Your Name" required/>
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label for="exampleFormControlInput1" class="form-label">Address</label>
        <input {...register("lastName")} type="text" class="form-control" placeholder="Your Address"/>
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label for="exampleFormControlInput1" class="form-label">Age</label>
        <input type="number" {...register("age", { valueAsNumber: true })}  class="form-control" placeholder="Age" required/>
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input type="email" {...register("email", { valueAsNumber: true })} class="form-control" placeholder="Your Email" required />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
   <div className="text-center mt-5 mb-5">
   <input className='mb-5 btn btn-light' type="submit" />
   </div>
   <Toaster/>
    </form>
        </div>
    );
};

export default CheckoutPage;