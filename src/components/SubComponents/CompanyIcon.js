import React from 'react'
function CompanyIcon() {
    return (
        <div className='flex w-48 h-[42px] gap-3 items-center'>
            <div>
                <div className='h-10 w-10 bg-[#FFFFFF] rounded '>
                    <img className='rounded-[4px]' src='/Navbar/Image.svg' />
                </div>
            </div>
            <div className='flex justify-between items-center flex-col w-[108px] h-[42px] gap-1'>
                <span className='text-[#FFFFFF] font-medium text-[15px] leading-[22px] w-full'>Nishyan</span>
                <span className="font-inter font-normal text-sm leading-4 underline opacity-[80%] w-full h-4 cursor-pointer">Visit store</span>
            </div>
            <div className='h-5 w-5'>
                <img className='cursor-pointer relative top-[6.88px] left-[2.5px] w-[15px] h-[8.68px]' src='/Navbar/Vector.svg' />
            </div>
        </div>
    )
}

export default CompanyIcon;