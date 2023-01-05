import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { stories } from "../../store/storeSlice"
const FeatureStorie = ({ title, date, image, logo, storieImages, length }) => {
    const dispatch = useDispatch();
    let grid = [];
    for (let i = 0; i < length; i++) {
        grid.push(<div className="flex-1 h-full border-r-2 border-r-black border-r-solid box-border last:border-x-0"></div>);
    }
    return (
        <Link to="/storie" onClick={() => { dispatch(stories(storieImages)) }}>
            <div className=" w-245 h-445 relative rounded overflow-hidden before:content-[''] before:absolute before:top-1 before:left-1 before:w-9 before:h-9 before:bg-no-repeat before:bg-center before:bg-caroselImg">
                <img className='h-full w-full object-cover' src={image} alt="feature Image" />
                <div className='absolute bottom-0 h-36 w-full'>
                    <div className=' w-inherit h-inherit bg-none relative'>
                        <span className='absolute bg-none text-white font-bold h-11 p-2 text-ellipsis break-words font-Lato'>{title}</span>
                        <span className='absolute bg-none text-white font-semibold font-Lato bottom-2 text-sm left-2' >{date}</span>
                        <img className='absolute bg-none bottom-2 right-2 h-5 w-5' src={logo} alt='logo' />
                        <div className='h-1px w-full bg-white flex'>{grid}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default FeatureStorie