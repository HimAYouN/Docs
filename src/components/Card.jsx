import React, { useState, useEffect } from 'react';

import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import './Card.css'
import { motion } from "framer-motion"



function Card({id, fechedContent, plusClicked, delButton, reference}) {
  const [bgColor, setBgColor] = useState("bg-emerald-400/40");

  const [isMarked, setIsMarked] = useState(false);

  const [showCards, setShowCards] = useState("");



  ///DONE///
  const checkButton = (e)=>{
      e.preventDefault();
      //Function to change background color of the card.

      isMarked ? 
      (setBgColor("bg-emerald-400/40")) :
      (setBgColor("bg-zinc-900/40")) 
      
      
      setIsMarked((prev)=>!prev);
      // console.log(bgColor)

      
  }


  


  // plusClicked ? (setShowCards("hidden")) : (setShowCards(""))
  useEffect(() => {
    // Use useEffect to update showCards when plusClickedProp changes
    if (plusClicked) {
      setShowCards("hidden");
    } else {
      setShowCards("");
    }
  }, [plusClicked]);



  //Date 
  let currentDate = new Date();
  const year = (currentDate.getFullYear()).toString().substring(2,4);
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  // console.log(year + " " + month +"/" + day)

  return (
    <div className=''>
        <motion.div 
          drag dragConstraints={reference}
          whileDrag={{scale: 1.2}} 
          dragElastic={0.2} 
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          className= {` ${showCards} relative flex-shrink-0  w-60 h-80 ${bgColor} rounded-[20px] p-5 shadow-md shadow-zinc-900  transition-all duration-0.9`} 
        > 
            
            <p 
              className="h-[60%] p-3 my-5 overflow-auto scrollBar shadow shadow-zinc-800/40 rounded text-zinc-100">
              {fechedContent}
            </p>


            <div className="proButtons flex justify-between mt-8 mx-8">
              <MdOutlineDelete size="1.5em" onClick={()=>delButton(id)}   className='cursor-pointer'/>
              <IoCheckmarkDoneSharp size="1.5em" onClick={checkButton} className='cursor-pointer'/>
            </div>

            <p className=' mt-6 flex w-full justify-center'>{`${day}/${month}/${year}`}</p>
        </motion.div>
    </div>
  )
}

export default Card