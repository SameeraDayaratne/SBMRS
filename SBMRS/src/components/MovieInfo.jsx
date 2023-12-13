import React from 'react';
import back from '../assets/back.jpg' 
import s from "../assets/2.jpg";

function MovieInfo(props) {
    return (
        <div className='text-white '>

          <div className='w-full h-screen'>
            <img className='w-full h-screen object-cover ' src={back} alt="" />
            <div className='bg-black/90 w-full h-screen absolute top-0 left-0'  />
        </div>  
           
            
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] w-[80%] mx-auto pt-0'>

            <div className='grid   md:grid-cols-3 w-full gap-3'>

                <div className="max-w-[300px] place-self-center sm:place-self-start md:place-self-start max-h-[450px] overflow-hidden  shadow-lg group">
                    <img src={s} alt="" className="transition-transform group-hover:scale-110 duration-200 object-cover"/>     
                </div>
                <div className=''>
                <h3>hello</h3>
                </div>
                
                <h3>hello</h3>


            </div>
       
            {/* <p className='uppercase md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>The Movie Rating Systemsssss</p>
            <p className='md:text-2xl sm:text-xl text-sm '>Capturing the Heartbeats of Cinema</p>
            <div className='flex justify-center items-center'>
                <p className='md:text-2xl sm:text-xl text-sm font-bold'> Your</p>
               
            </div>
            <button className='bg-[#ff5100] w-[150px] rounded-full mx-auto py-2 font-bold mt-3 hover:bg-[#c63600]'>Get Started</button> */}
        </div>
        </div>
    );
}

export default MovieInfo;