import React from "react";
import { LiaStarSolid } from "react-icons/lia";

export default function Card(props) {
  return (
    <div className="w-full md:w-[273px] shrink-0 grow mb-3">
      <div className=" group h-[182px] rounded-[15px] overflow-hidden relative">
        <img
          className="group-hover:scale-110 duration-150 object-cover w-full h-full"
          src={"https://api-iz01.onrender.com/images/"+props.image}
          alt=""
        />
        <div className="image-overlay absolute w-full bottom-0 bg-gradient-to-t from-transparent to-black">
          <div className="text-white p-3 font-bold text-[18px] leading-6"> 
          {props.offer}
         </div>
        <div>
        
      </div>
      </div>
        </div>
        <div className="mt-3 mx-1 text-l font-bold">
          
          {props.title}
       
        </div>
        <div className="">
          <LiaStarSolid className="inline mr-2" />{props.rating} 
         <span className="ml-2">{props.minTime}-{props.maxTime}mins</span> 
        </div>
      <div className="text-slate-700">
        {props.name}
        <br/>
        {props.place}
      
      </div>
    </div>
  );
}
