import React from 'react'
import { Link } from 'react-router-dom';
const ExploreTopSection = ({title, link, heading}) => {
  return (
      <div className=' text-base font-Lato font-normal block mb-1 relative text-212121 whitespace-nowrap py-3 pl-5'>
        {heading && <h4>{heading}</h4>}
          <Link to={link} className=' text-left no-underline text-sm block font-Lato transition-all text-212121'>
              {title && <span className='flex items-center justify-between gap-4 text-xs font-extralight text-363636'>{title}</span>}
          </Link>
      </div>
  )
}

export default ExploreTopSection