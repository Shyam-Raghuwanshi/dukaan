import React from 'react'

function DashboardHeader() {
  return (
    <div className='w-[1216px] h-[64px] border-b-[1px] px-8 py-3 flex items-center gap-4 absolute left-[272px] border-[#D9D9D9] top-0'>
      <div className='w-[360px] h-[22px] flex gap-4 items-center'>
        <div className='w-[70px] h-[22px] flex gap-4'>
          <span className='font-normal text-[15px] leading-[22px]'>Payments</span>
        </div>
        <div className='w-[94px] h-4 flex gap-[6px] items-center'>
          <div className='h-[14px] w-[14px]'>
            <img src='/Dashboard/Question.svg' className='w-[12.6px] h-[12.6px]' />
          </div>
          <span className='font-normal text-xs leading-4'>How it works</span>
        </div>
      </div>
      <div className='w-[400px] h-10 rounded-[6px] py-[9px] px-[16px] flex items-center gap-2 bg-[#F2F2F2]'>
        <img src='Dashboard/search.svg' className='h-[15.07px] w-[15.37px]' />
        <input className='bg-none border-none font-normal text-[15px] leading-[22px] bg-transparent outline-none h-[22px] w-[213px]' placeholder='Search feature, tutorials, etc.' />
      </div>
      <div className='w-[360px] h-10 flex gap-2 justify-end'>
        <div className='w-[92px] h-10 flex gap-3'>
          <div className='w-10 h-10 rounded-full cursor-pointer bg-[#E6E6E6] flex items-center justify-center'>
            <img className='h-5 w-5' src='/Dashboard/Announcement.svg' />
          </div>
          <div className='w-10 h-10 rounded-full cursor-pointer bg-[#E6E6E6] flex items-center justify-center'>
            <img className='h-[12.73px] w-[26.73px]' src='/Dashboard/Polygon.svg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader