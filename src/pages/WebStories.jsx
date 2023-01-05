import React from 'react'
import AddComponent from '../component/Add/AddComponent';
import Heading from '../component/compHeading/Heading';
import Navbar from '../component/Navbar/Navbar';
import LeftSidebar from '../component/sidebar/LeftSidebar';
import RightSidebar from '../component/sidebar/RightSidebar';
import FeatureStorie from '../component/storie/FeatureStorie';
import { StorieData } from '../data'
const WebStories = () => {
    return (
        <div className='w-full'>
            <AddComponent />
            <Navbar />
            <div className='w-full flex gap-5 mt-5'>
                <div className='flex-1 flex bg-white'>
                    <LeftSidebar />
                </div>
                <div className='w-full flex justify-center flex-col  flex-1'>
                    <Heading title="Web Stories" />
                    <div className='relative w-550 p-5 pb-0 box-border flex flex-wrap bg-white justify-between gap-5 '>
                        {
                            StorieData.map((i) => (
                                <FeatureStorie title={i.title} image={i.featureImage} date={i.date} logo={i.logo} length={i.storieImages.length} storieImages={i.storieImages} />
                            ))
                        }
                    </div>
                </div>
                <div className='flex-1 bg-white'>
                    <RightSidebar />
                </div>
            </div>
        </div>
    )
}

export default WebStories