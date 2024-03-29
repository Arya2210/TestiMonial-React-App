import React from "react";
import Testimonials from "./component/Testimonials";
import reviews from "./data"

const App = ()=>{
 console.log("app me " +reviews)
  return (
  <div className="flex flex-col w-[100vw] h-[100vh] justify-center  items-center bg-gray-200 " >
     <div className="text-center ">
       <h1 className="text-4xl font-bold ">Our Testimonials</h1>
       <div className="bg-violet-400 h-[4px] w-1/4  mx-auto mt-1 rounded-sm "></div>
       <Testimonials reviews={reviews} />
     </div>

  </div>
  )
};

export default App;
