import React from 'react'
import {Link} from 'react-router-dom'
const NavItems = ({title, link}) =>  (
    <li className=' list-none block'>
        <Link className='no-underline cursor-pointer block font-Lato font-normal box-border text-base text-212121 whitespace-nowrap' to={link} >{title}</Link>
    </li>
  )


export default NavItems