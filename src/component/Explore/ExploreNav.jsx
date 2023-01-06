import React from 'react'
import { useDispatch } from 'react-redux'
import { explores } from "../../store/exploreSlice"
import TopExploreItem from './TopExploreItem'
import { CiStar } from 'react-icons/ci'
import { IoNewspaperOutline } from 'react-icons/io5'
import { SlBell } from 'react-icons/sl'
import { GoMail } from 'react-icons/go'
import { SlBadge } from 'react-icons/sl'
import LowerExploreNav from './LowerExploreNav'
import ExploreTopSection from './ExploreTopSection'

const ExploreNav = () => {
  const dispatch = useDispatch()
  return (
    <div className=' fixed h-full w-full bg-0000003d z-60' onClick={() => { dispatch(explores(false)) }}>
      <div className='h-full w-1/6 bg-white overflow-auto md:w-1/2'>
        <div>
          <TopExploreItem title="Subscribe" link="/subscribe" Icon={SlBadge} />
          <TopExploreItem title="My Reads" link="/my-reads" Icon={CiStar} />
          <TopExploreItem title="e-paper" link="/e-paper" Icon={IoNewspaperOutline} />
          <TopExploreItem title="Notification" link="/notification" Icon={SlBell} />
          <TopExploreItem title="Newsletters" link="/newsletters" Icon={GoMail} />
          <TopExploreItem title="IFSC Code Finder" link="/ifcecodefinder" />
        </div>
        <div>
          <LowerExploreNav source="https://images.livemint.com/static/wsj.svg" link="/wsj" />
          <LowerExploreNav title="Web Stories" link="/web-stories" />
          <LowerExploreNav title="MintGenie" />
          <LowerExploreNav title="For You" />
          <LowerExploreNav title="SME" />
        </div>
        <div>
          <ExploreTopSection heading="Top Section" />
          <ExploreTopSection title="NEWS" />
          <ExploreTopSection title="COMPANIES" />
          <ExploreTopSection title="TECHNOLOGY" />
          <ExploreTopSection title="MARKETS" />
          <ExploreTopSection title="MONEY" />
          <ExploreTopSection title="PHOTOS" />
          <ExploreTopSection title="MUTUAL FUNDS" />
          <ExploreTopSection title="INSURANCE" />
          <ExploreTopSection title="LOUNGE" />
          <ExploreTopSection title="OPINION" />
          <ExploreTopSection title="BUDGET 2023" />
          <ExploreTopSection title="AUTO NEWS" />
          <ExploreTopSection title="SPORTS" />
          <ExploreTopSection title="INDUSTRY" />
          <ExploreTopSection title="VIDEO" />
          <ExploreTopSection title="POLITICS" />
          <ExploreTopSection title="EDUCATION" />
          <ExploreTopSection title="IMPACT FEATURE" />
          <ExploreTopSection title="BAND STORIES" />
          <ExploreTopSection title="PODCAST" />
        </div>
      </div>
    </div>



  )
}

export default ExploreNav