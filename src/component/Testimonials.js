import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonials(props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftshiftHandler() {
       if(index-1 < 0){
         setIndex(reviews.length-1) ;
       } 
       else{
         setIndex(index-1) ;
       }
  }
  function rightshiftHandler() {
    if(index+1 >= reviews.length){
      setIndex(0) ;
    }
    else{
      setIndex(index+1) ;
    }
  }
  function surpriseHandler() {
   let newindex = Math.floor( Math.random() * (reviews.length) ) ;
   setIndex(newindex) ;
  }
  return (
    <div className=" w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-200 hover:shadow-md "
    >
      <Card review={reviews[index]} />

      <div className="flex text-3xl mt-5 gap-3 justify-center text-violet-400 font-bold ">
        <button
          onClick={leftshiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightshiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>
      <div>
        <button onClick={surpriseHandler}
         className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 rounded-md px-10 py-2 cursor-pointer font-bold text-white text-lg mt-5 ">
          Surprise me
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
