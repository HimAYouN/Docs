import React, {useState} from 'react'

function Form(props) {

    const [newContent, setContent] = useState('');


    function submitHandler(e){
        e.preventDefault();

        props.onSubmit(newContent);
        // console.log(newContent);
        setContent('');

    }

    function inputHandler(e){
        setContent(e.target.value);
    }

  return (
    <div>
        {/* <form onSubmit={submitHandler}>
            <div  className='flex flex-col w-60 h-80 bg-green-400/40 rounded-[20px] p-5 hover:scale-[1.05] transition-all duration-0.9'>
                <label className='h-[40%] flex justify-center size-2xl'>Content</label>
                <input required type='text' value={newContent} onChange={inputHandler} className='w-full h-[80%] bg-green-300/40 rounded-[20px]  '></input>
                <button type='submit' className='proButtons flex justify-center items-center m-10 h-[70%] bg-green-300/40 rounded-[20px]'> Add New</button>
            </div>
        </form> */}
        <form onSubmit={submitHandler} className="flex justify-center items-center h-full">
            <div className="w-72 h-80 bg-green-300/20 rounded-2xl p-5 pt-10 hover:scale-105 transition-all duration-500">
              <label className="text-lg  mb-4 text-zinc-900 ">Content goes here: </label>
              <textarea
                placeholder='TYPE SOMETHING: '
                required
                type="text"
                value={newContent}
                onChange={inputHandler}
                className="w-full h- bg-zinc-700/40 rounded-2xl p-3 focus:outline-none resize-none"
                maxLength={80}   
              />
              <button
                type="submit"
                className="proButtons w-full mt-6 h-1/4 bg-green-300/40 rounded-2xl flex justify-center items-center"
              >
                Add Card
              </button>
            </div>
        </form>

    </div>
  )
}

export default Form