import React from 'react'
import UpperNav from './UpperNav'
import NavigationBar from './NavigationBar'
import Searchbar from './Searchbar'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const showSearch = useSelector((state) => state.search.showSearch);
    console.log(showSearch)
    return (
        <div className='w-full bg-white flex items-center justify-center sticky top-0 flex-col z-50 box-border'>
            <UpperNav />
            {
            showSearch && <Searchbar />
            }
         <NavigationBar />
        </div>
    )
}

export default Navbar