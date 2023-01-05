import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
const TopExploreItem = ({ Icon, title, link }) => {
  return (
    <div className=' text-base font-Lato font-normal block mb-1 relative text-212121 bg-f6f6f6 whitespace-nowrap py-3 pl-5'>
      <Link to={link} className=' text-left no-underline text-sm text-212121 font-medium flex items-center justify-between pr-3'>
        
        <span className='flex items-center justify-between gap-4 text-base text-363636'>{Icon && <Icon />}{title}</span>
        <MdOutlineKeyboardArrowRight className=' text-base text-777777' />
      </Link>
    </div>
  )
}

export default TopExploreItem