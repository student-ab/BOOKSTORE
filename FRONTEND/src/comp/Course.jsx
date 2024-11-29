import { NavLink } from "react-router-dom";
import list from "../../public/data.json";
import Cards from "./Cards";
const Course = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 " >
      <div className="mt-28 items-center justify-centert text-center" >
        <h1 className="text-2xl md:text-4xl" >
          We are delighted to have you {""}
          <span className="text-pink-400" >Here! :) </span>
        </h1>
        <p className="mt-12" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
           voluptatem vitae id ut deserunt voluptate officia quae deleniti 
           magnam delectus tenetur debitis atque dolor praesentium, libero
            eum accusamus corporis aliquid. Voluptas, quibusdam suscipit!
             Vero praesentium eos quis quo recusandae minus voluptatum officia 
            pariatur perspiciatis excepturi?
        </p>
        <NavLink to="/" >
        <button className="mt-6 bg-pink-500 text-white px-4 rounded-md hover:bg-pink-700 duration-300 " >
          Back
        </button></NavLink>


      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4" >
        {
          list.map((item) => {
            return (
              <Cards key={item.id} item={item} />
            )
            // <Cards key={item.id} item={item} />
            
          })
        }
      </div>

    </div>
   
 
    </>
  )
}

export default Course;