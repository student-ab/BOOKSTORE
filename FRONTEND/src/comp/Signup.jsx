import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Login from "./Login";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
    <div className="flex justify-center items-center h-screen" >
     <div className="w-[600px]">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
        
            <NavLink
            to="/"
            className = "btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >
                ✕
  
            </NavLink>
          
          <h3 className="font-bold text-lg">Signup</h3>
          <div className="mt-4 space-y-2 ">
            <span>Name</span>
            <br />
            <input type="text"
            placeholder="Enter your full name"
            className="w-80 px-3 py-1 border rounded-md outline-none "
            {...register("name", { required: true })} />
             <br />
            {errors.name &&  <span className="text-sm text-red-400 " >This field is required</span>
            }
          </div>

        {/* Email */}

        <div className="mt-4 space-y-2 ">
            <span>Email</span>
            <br />
            <input type="email"
            placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none " 
            {...register("email", { required: true })} />
            <br />
            {errors.email &&  <span className="text-sm text-red-400 " >This field is required</span>}
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
            <br />
            {errors.password && <span className="text-sm text-red-400 " >This field is required</span>}
          </div>

 
          {/* button */}

          <div className="flex justify-around mt-4  ">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 " >
                Signup
            </button>
            <p className="text-md" > 
               Have account?{" "}
                <button 
                className="underline text-blue-500 cursor-pointer "
                onClick={() =>{
                    document.getElementById('my_modal_3').showModal()  // open login modal
                }} >Login</button>{" "}
                <Login/>
            </p>
          </div>
          </form>
        
        </div>
      </div>
      </div>
    </>
  
  )
}

export default Signup; 