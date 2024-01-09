import React from 'react'

function Pagination() {
    return (
        <div className='w-[1128px] h-[104px] flex gap-6 flex-col items-center'>
            <div className='w-full h-[48px] border-b-[1px] py-[14px] px-3 flex gap-10'>
                <div className='w-[246px] h-[20px]'>
                    <div className='w-[60px] h-full flex gap-2'>
                        <span className='font-medium text-[14px] leading-5 text-[#146EB4]'>#281209</span>
                    </div>
                </div>
                <div className='w-[246px] h-[20px]'>
                    <div className='w-[81px] h-full flex gap-2'>
                        <span className='font-normal text-[#1A181E] text-[14px] leading-5'>7 July, 2023</span>
                    </div>
                </div>
                <div className='w-[246px] h-[20px] flex justify-end gap-4'>
                    <div className='w-[64px] h-full flex gap-2'>
                        <span className='font-normal text-[#1A181E] text-[14px] leading-5'>₹1,278.23</span>
                    </div>
                </div>
                <div className='w-[246px] h-[20px] flex justify-end gap-4'>
                    <div className='w-[25px] h-full flex gap-2'>
                        <span className='font-normal text-[#1A181E] text-[14px] leading-5'>₹22</span>
                    </div>
                </div>
            </div>
            <div className='w-[610px] h-[32px] flex gap-6 items-center'>
                <div className='w-[100px] h-[32px] rounded border-[1px] py-[6px] pr-3 pl-[6px] flex gap-[6px] border-[#D9D9D9] items-center cursor-pointer'>
                    <div className='h-[18px] w-[18px] flex items-center justify-center'>
                        <img className='w-[6px] h-[10.5px]' src="/Dashboard/LeftArrow.svg"></img>
                    </div>
                    <div className='w-[58px] h-[20px] flex gap-2'>
                        <span className='font-medium text-[14px] leading-5 flex items-center'>Previous</span>
                    </div>
                </div>

                <div className='w-[388px] h-[28px] flex gap-2 items-center'>
                    {Array.from({ length: 10 }).map((item, index) => {
                        return (
                            <div key={index} className='w-7 h-7 rounded py-[2px] flex gap-2 hover:bg-[#146EB4] hover:text-[#FFFFFF] cursor-pointer items-center justify-center'>{index}</div>
                        )
                    })}
                </div>

                <div className='w-[74px] h-[32px] rounded border-[1px] py-[6px] pr-[6px] pl-3 flex gap-[6px] border-[#D9D9D9] items-center cursor-pointer'>
                    <div className='w-[58px] h-[20px] flex gap-2'>
                        <span className='font-medium text-[14px] leading-5 flex items-center'>Next</span>
                    </div>
                    <div className='h-[18px] w-[18px] flex items-center justify-center'>
                        <img className='w-[6px] h-[10.5px]' src="/Dashboard/RightArrow.svg"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination