import React, {useRef, useState} from 'react'
import Card from './Card'
import { CiCirclePlus } from "react-icons/ci";
import Form from './Form';




function Foreground() {


  const data = [];
  const [plusClicked, setPlusClicked] = useState(false);
  const [newData, setNewData] = useState(data);
  const [count, setCount] = useState(1);
  const ref = useRef(null);



  function formFetcher(content){
    // console.log("I'm inside foreground");

    const newObj = {
      id: count,
      fechedContent: content,
      isCompleted: false
      }

    // console.log(newData);
    setNewData(prevData => [...prevData, newObj]);
    setPlusClicked(false);
    setCount(prevCount => prevCount + 1);
    // console.log(count);
  }
  function addElement(){
    // console.log("HIII")
    setPlusClicked(true);
  }

  ///Done///

  function delButton(id){
    const updatedArr = (newData.filter(card => card.id !== id))
    setNewData(updatedArr)

  }
  



  return (
    <div ref={ref}  className='fixed z-[3] top-0 left-0 w-full h-full px-4 py-10'>
          <div className='flex  gap-4 flex-wrap justify-center m-auto'>
            {plusClicked ? (<Form onSubmit={formFetcher}></Form>) : (<div></div>) }
            
            {
              newData.map((data)=>{
                return(   
                  <Card key={data.id} {...data} plusClicked={plusClicked} delButton={delButton} reference={ref}> </Card>
                )
              })
            }
          </div> 
            { !plusClicked ? 
              
              (
                newData.length === 0 ?
                (<CiCirclePlus className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white' size="12em " onClick={addElement} />) :
                (<CiCirclePlus className='absolute bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white' size="5em " onClick={addElement} />)
              
              ) : 
              
              (<div></div>)
              

            }
        
    </div>
  )
}

export default Foreground