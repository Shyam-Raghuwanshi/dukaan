import React from 'react'
import NavItems from './SubComponents/NavItems'
import BaseNav from './SubComponents/BaseNav'
import CompanyIcon from './SubComponents/CompanyIcon'

function Navbar() {
  return (
    <div className='w-56 h-[1482px] text-[#FFFFFF] ml-12'>
      <div className='bg-[#1E2640] flex flex-col gap-4 px-4 py-[10px] w-full h-full items-center'>
        <div className='flex flex-col gap-6 h-[1380px] w-52 items-center'>
          <CompanyIcon />
          <NavItems />
        </div>
        <BaseNav />
      </div>
    </div>

  )
}

export default Navbar