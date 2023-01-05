import React from 'react'
import AddComponent from '../component/Add/AddComponent'
import Navbar from '../component/Navbar/Navbar'
import LeftSidebar from '../component/sidebar/LeftSidebar'
import RightSidebar from '../component/sidebar/RightSidebar'
const Home = () => {
  return (
    <div className='w-full'>
      <AddComponent />
      <Navbar />
      <LeftSidebar />
      <div>
        home
      </div>
      <RightSidebar />
    </div>
  )
}

export default Home