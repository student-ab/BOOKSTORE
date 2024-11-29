// import React from 'react'
import { useForm } from "react-hook-form";
import { NavLink, } from "react-router-dom";

const Login = () => { 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return ( 
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
          <NavLink
            to="/"
            className = "btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => { document.getElementById("my_modal_3").close()}} >
                ✕
          </NavLink>

          
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4 space-y-2 ">
            <span>Email</span>
            <br />
            <input type="email"
            placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none "
            {...register("email", { required: true })} />
            <br />
             {errors.email && <span className="text-sm text-red-400 " >This field is required</span>}
          </div>


        {/* password */}

          <div className="mt-4 space-y-2 ">
            <span>Password</span>
            <br />
            <input type="password"
            placeholder="Enter your Password"
            className="w-80 px-3 py-1 border rounded-md outline-none "
            {...register("password", { required: true })} />
            <br />
             {errors.password && <span className="text-sm text-red-400 " >This field is required</span>}
          </div>

 
          {/* button */}

          <div className="flex justify-around mt-4  ">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 " >
                Login
            </button>
            <p>
                Not registered?{" "}
                <NavLink to="/signup" className="underline text-blue-500 cursor-pointer " >Signup</NavLink>{" "}
            </p>
          </div>

          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
