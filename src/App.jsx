import React, {useState} from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import MiddleLayer from './components/MiddleLayer'
import data from './data'

function App() {

  // const [newData, setNewData ] = useState(data);

  // function addNewData (fetchedContent){
  //   setNewData()
  // }

  return (
    <div className='relative w-full h-full '> 
      <Background/> 
      <MiddleLayer/>
      <Foreground />
      </div>
  )
}

export default App