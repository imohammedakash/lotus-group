import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsTextRight } from 'react-icons/bs'
import { MdOutlineNotifications } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { explores } from "../../store/exploreSlice"
import { search } from "../../store/searchSlice"
const UpperNav = () => {
    const dispatch = useDispatch();
    const showSearch = useSelector((state) => state.search.showSearch);
    return (
        <div className='w-full md:px-3  py-0 border-b-1px border-d0d0d05e border-solid box-border flex items-center justify-center'>
            <div className=" h-16 w-3/4 flex items-center justify-between md:w-full">
                <div className="flex items-center w-24 px-1 py-1 justify-center gap-1 rounded-sm font-bold text-sm outline-none         cursor-pointer bg-none border-solid border-1px border-gray-600 " onClick={() => { dispatch(explores(true)) }} >
                    <BsTextRight className='w-5 h-5' />
                    Explore
                </div>
                <div className='w-24'>
                    <img src="https://res.cloudinary.com/dn83xtspp/image/upload/v1672917848/Lotus-Groups_kcmnps.png" alt="logo" />
                </div>
                <div className="flex items-center justify-between gap-5">
                    <BiSearchAlt2 className=' text-2xl text-474747 cursor-pointer' onClick={() => { dispatch(search(!showSearch)) }} />
                    <MdOutlineNotifications className=' text-2xl text-474747 cursor-pointer md:hidden' />
                    <div className=" font-bold px-5 md:pl-3 md:px-0 py-1 font-Lato text-base border-l-1px border-solid border-909090 whitespace-nowrap">e-paper</div>
                    <div className=" font-bold px-5 py-1 font-Lato text-base border-l-1px border-solid border-909090 md:hidden whitespace-nowrap ">Sign in</div>
                </div>

            </div>



        </div>
    )
}

export default UpperNav

