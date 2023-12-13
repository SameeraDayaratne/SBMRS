import React from "react";
import back from "../assets/back.jpg";
import s from "../assets/2.jpg";

function MovieInfo(props) {
  return (
    <div className="text-white relative ">
      <div className="w-full h-screen">
        <img className="w-full h-screen object-cover " src={back} alt="" />
        <div className="bg-black/90 w-full h-screen absolute top-0 left-0" />
      </div>

      <div className="absolute top-0  pt-24 w-[80%] left-0 right-0 mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 w-full gap-3 ">
          <div className=" sm:max-w-[300px] place-self-center sm:place-self-start md:place-self-start sm:max-h-[450px] overflow-hidden  shadow-lg group ">
            <img
              src={s}
              alt=""
              className="block transition-transform group-hover:scale-110 duration-200 object-cover"
            />
          </div>
          <div className="md:col-span-2 flex flex-col">
            <h3>Trolls Band Together (2023)</h3>
            <h3>There are some new trolls on the block.</h3>
            <div className="flex gap-3">
              <h3>hello</h3>
              <h3>hello</h3>
              <h3>hello</h3>
              <h3>hello</h3>
            </div>
            <div className="flex gap-3">
              <h3>hello</h3>
              <h3>hello</h3>
            </div>
            <h3>Overview</h3>
            <h3>
              When Branchs brother, Floyd, is kidnapped for his musical talents
              by a pair of nefarious pop-star villains, Branch and Poppy embark
              on a harrowing and emotional journey to reunite the other brothers
              and rescue Floyd from a fate even worse than pop-culture
              obscurity.
            </h3>
            <div className="flex gap-3">
              <h3>Status: Released</h3>
              <h3>Release Date: Oct 12, 2023</h3>
              <h3>Runtime: 1h 32m</h3>
            </div>
            <h3>Director: Walt Dohrn </h3>
            <h3>Writer: Elizabeth Tippet</h3>
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