import React from 'react'
import { Link } from 'react-router-dom';

const LowerExploreNav = ({title, source, link}) => {
  return (
      <div className='text-base font-Lato font-normal block mb-1 relative text-212121 bg-f6f6f6 border-b-1px border-solid border-#f6f6f6 whitespace-nowrap py-3 pl-5'>
          <Link to={link} className='text-left no-underline text-sm block transition-all text-212121 font-bold font-Lato'>
              {title && <span className='flex items-center justify-between gap-4 text-base text-363636'>{title}</span>}
              {source && <img src={source}  alt="img"/>}
          </Link>
      </div>
  )
}

export default LowerExploreNav