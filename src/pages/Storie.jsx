import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'
import { MdOutlineRefresh } from 'react-icons/md'
const Storie = () => {
  const [next, setNext] = useState(0);
  const Stories = useSelector((state) => state.storie.stories);
  const length = Stories.length;
  const RenderingStore = Stories[next];
  let grid = [];
  for (let i = 0; i < length; i++) {
    grid.push(<div className=" h-2px box-border bg-white rounded "></div>);
  }
  return (
    <div className="flex h-screen w-full items-center justify-center gap-4 relative after:content-[''] md:after:hidden after:absolute after:bottom-0 after:left-0 after:top-0 after:right-0 after:backdrop-blur-100 ">


      <img className='h-full w-full object-cover absolute -z-10 md:hidden' src={RenderingStore.featureImage} alt="img" />


      {
        next !== 0 ?
          <button className='md:hidden h-12 w-12 bg-white flex items-center justify-center outline-none border-none rounded-full cursor-pointer z-50 ' onClick={() => { setNext(next - 1) }} >
            <BsChevronLeft className='bg-none font-black h-full w-full box-border p-3 rounded-full  ' />

          </button> :
          <button className='md:hidden h-12 w-12 bg-white flex items-center justify-center outline-none border-none rounded-full cursor-pointer z-50 ' disabled > <BsChevronLeft className='bg-none font-black h-full w-full box-border p-3 text-gray-300 rounded-full ' />


          </button>
      }
      <div className='h-full md:w-full flex items-center justify-center overflow-hidden relative z-50'>
        {
          next !== 0 ? <div className='absolute h-full bg-none outline-none border-none w-2/6 left-0' onClick={() => { setNext(next - 1) }}></div> : <div className='absolute h-full bg-none outline-none border-none w-2/6 left-0' disabled ></div>
        }

        <img className='h-full w-full object-cover' src={RenderingStore.featureImage} alt="img" />
        <div className='absolute right-auto top-3/4 bottom-auto text-center text-2xl bg-1313137e font-medium text-FFFFFF box-border w-3/4 pt-2 pb-2 pr-3 pl-3 border-b-4 border-solid border-f4dd09ff  '>
          {RenderingStore.title}
        </div>
        <img className='absolute left-3 top-3 w-12 h-12' src={RenderingStore.logo} alt='logo' />


        <div className=' w-11/12 flex absolute top-1 gap-1'>{grid}</div>



        {
          length - 1 !== next ? <div className='absolute h-full bg-none outline-none border-none w-2/3 right-0' onClick={() => { setNext(next + 1) }}></div> : <div className='absolute h-full bg-none outline-none border-none w-2/3 right-0' disabled ></div>
        }



      </div>



      {
        length - 1 !== next ? <button className='md:hidden h-12 w-12 bg-white flex items-center justify-center outline-none border-none rounded-full cursor-pointer z-50 ' onClick={() => { setNext(next + 1) }} > <BsChevronRight className='bg-none font-black h-full w-full box-border p-3 rounded-full ' /> </button> : <button className='md:hidden h-12 w-12 bg-white flex items-center justify-center outline-none border-none rounded-full cursor-pointer z-50' onClick={() => setNext(0)} > <MdOutlineRefresh className='bg-none font-black h-full w-full box-border p-3 rounded-full ' /></button>
      }


    </div>
  )
}

export default Storie