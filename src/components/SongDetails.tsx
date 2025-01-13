import React from 'react'

const SongDetails = () => {
  return (
    <div className='h-full w-full xs:mx-6 md:m-2 rounded-3xl  bg-white bg-opacity-5 shadow-xl flex flex-col items-center'>
      <div className=" h-[80%]">
        <img src="./soami.jpeg" alt="songImage" className="h-full md:h-[80%] xs:rounded-full" />
      </div>
      <h1 className='h-[10%] md:pt-6'>So am i</h1>
      <p className='h-[10%] text-xs'>Ava Max</p>
    </div>
  )
}

export default SongDetails