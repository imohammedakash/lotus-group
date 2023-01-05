import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { BiSearchAlt } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { search } from "../../store/searchSlice"
const Searchbar = () => {
    const [placeholder, setplaceholder] = useState('News');
    const dispatch = useDispatch();
    return (
        <div className=' flex items-center justify-center h-16 bg-white w-full border-b-1px border-solid border-b-f1f1f1'>
            <div className='flex justify-start items-center w-3/4 gap-5 '>
                <div className='flex justify-center items-center gap-3'>

                    <div className='flex items-center justify-between gap-3'>
                        <div className=' h-4 w-4 rounded-full  bg-white outline outline-1  outline-black  box-border border-4px border-white'></div>
                        <span className='font-Lato font-black'>Stocks</span>
                    </div>
                    <div className='flex items-center justify-between gap-3'>
                        <div className=' h-4 w-4 rounded-full  bg-white outline outline-1  outline-black  box-border border-4px border-white'></div>
                        <span className='font-Lato font-black'>Mutual Funds</span>
                    </div>
                    <div className='flex items-center justify-between gap-3'>
                        <div className=' h-4 w-4 rounded-full  bg-black outline outline-1  outline-black  box-border border-4px border-white'></div>
                        <span className='font-Lato font-black'>News</span>
                    </div>


                </div>
                <div className='flex justify-center items-center relative'>
                    <input className='w-437px outline-none border-1px border-solid border-f1f1f1 h-10 box-border py-2 px-3' type="text" placeholder={`Search ${placeholder}`} />
                    <div className='h-10 w-10 bg-474747 flex items-center justify-center'>
                       <BiSearchAlt className='  text-white text-2xl ' />
                    </div>
                    <RxCross1 className='absolute -right-20 text-2xl text-474747 cursor-pointer' onClick={() => { dispatch(search(false)) }} />
                    
                </div>

            </div>
        </div>
    )
}

export default Searchbar