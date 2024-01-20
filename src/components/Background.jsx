import React from 'react'

function Background() {
  return (
    <>
        <div className='fixed  w-full h-full px-4'>
            <div className='absolute top-[5%] w-full py-10  flex justify-center text-zinc-300 text-2xl font-semibold'>Documents</div>
            <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-700 text-[13vw] leading-none tracking-tight'>Docs.</h1>
            <p className='absolute bottom-[15%] w-full py-10  flex justify-center text-zinc-800 '>Bhaiya Design part m thoda pechai hu lenkin dehry dehry seekh rha hu toh design/animation wala part mind mt krna </p>
            <p className='absolute bottom-[3%] w-full py-10  flex justify-center text-zinc-800 '>Pending:<br/> -Transition between form and cards. <br/> -Scroll Page/ Fixed number of cards. <br/> -Animation</p>
            {/* <p className='absolute bottom-[5%] w-full py-10  flex justify-center text-zinc-400 '>I'm adding functionalities to this app little by little . i'm still learning react. I will try to add all the required functions ASAP. Until then, this project is pending one in my list. If anyone wanna collab you can find me on Linkedin: Himayoun7931 </p> */}
        </div>
    </>
  )
}

export default Background