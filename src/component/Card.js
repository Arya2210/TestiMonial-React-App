import React from 'react'
import  {FaQuoteLeft ,FaQuoteRight} from "react-icons/fa"

function Card(props) {
    let review = props.review
  return (
    <div className='flex flex-col relative ' >
        <div className='absolute  top-[-7rem] z-[10] mx-auto ' >
            <img 
            className='aspect-square rounded-full w-[140px] h-[140px] '
            src={review.image} />

            {/* rounded background */}
            <div 
            className='bg-violet-400 absolute w-[140px] h-[140px] z-[-10] rounded-full top-[-4px] left-[8px]'
            ></div>
        </div>
        <div className='text-center mt-7 mb-4'
        ><p className='font-bold tracking-wider text-2xl capitalize'
        >{review.name}</p>
        <p className='text-violet-300 uppercase text-sm '
        >{review.job} </p></div>

       

        <div className='text-violet-400 mx-auto '
        >
        <FaQuoteLeft/>
        </div>
        <div className='text-center  mt-4 mb-4  text-slate-500'
        >{review.text} </div>
        <div className='text-violet-400 mx-auto '
        >
        <FaQuoteRight/>
        </div>
        

       
        
    </div>
  )
}

export default Card