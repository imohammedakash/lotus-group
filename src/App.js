import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExploreNav from './component/Explore/ExploreNav'
import Home from './pages/Home'
import Storie from './pages/Storie'
import WebStories from './pages/WebStories'
const App = () => {
  const explore = useSelector((state) => state.explore.explores);

  return (
    <div className='relative w-full'>
      <Router>
        {
          explore && <ExploreNav />
        }

        <div className='w-full flex justify-center gap-5' >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-stories" element={<WebStories />} />
            <Route path="/storie" element={<Storie />} />
          </Routes>
        </div>

      </Router>
    </div >
  )
}

export default App