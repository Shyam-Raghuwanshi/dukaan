import React from 'react'
import Pagination from './Pagination'

function Overview() {
    return (
        <div className='absolute w-[1152px] h-[1354px] gap-8 top-24 left-[304px] flex flex-col'>
            <div className='w-full h-[178px] flex gap-6 flex-col'>
                <div className='w-full h-[36px] flex justify-between'>
                    <span className='h-7 w-[91px] font-medium text-[20px] leading-7 text-[#1A181E]'>Overview</span>
                    <div className='w-[137px] h-[36px]'>
                        <div className='w-full h-full rounded border-[1px] border-[#D9D9D9] flex gap-4 items-center justify-center'>
                            <span className='font-normal text-[16px] leading-6'>Last Month</span>
                            <div className='h-full flex items-center w-[16px] '>
                                <img className='h-[6.95px] w-3' src='/Dashboard/Vector.svg' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-[118px] flex gap-5'>
                    <div style={{ "box-shadow": "0px 2px 6px 0px #1A181E0A" }} className='w-[566px] h-full flex gap-6 p-5 bg-[#FFFFFF]'>
                        <div className='w-[526px] h-[78px] flex gap-4 flex-col'>
                            <div className='w-[102px] h-[24px] flex gap-2'>
                                <span className='font-normal text-[16px] leading-6'>Online orders</span>
                            </div>
                            <span className='font-medium text-[32px] leading-[38px]'>231</span>
                        </div>
                    </div>
                    <div style={{ "box-shadow": "0px 2px 6px 0px #1A181E0A" }} className='w-[566px] h-full flex gap-4 p-5 rounded-lg bg-[#FFFFFF]'>
                        <div className='w-[526px] h-[78px] flex gap-4 flex-col'>
                            <div className='w-[129px] h-[24px] flex gap-2'>
                                <span className='w-full h-full font-normal text-[16px] leading-6'>
                                    Amount received
                                </span>
                            </div>
                            <div className='w-full h-[38px] flex gap-4'>
                                <div className='w-full h-full flex justify-between'>
                                    <span className='w-[212px] h-[38px] font-medium text-[32px] leading-[38px]'>₹23,92,312.19</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[1144px] flex gap-5 flex-col'>
                <span className='w-[249px] h-[28px] font-medium text-[20px] leading-[28px]'>Transactions | This Month</span>
                <div style={{ "box-shadow": "0px 2px 6px 0px #1A181E0A" }} className='w-full h-[1096px] rounded-lg px-3 pt-3 pb-6 bg-[#FFFFFF]'>

                    <div className='w-[1128px] h-[92px] flex gap-3 flex-col'>

                        <div className='w-full h-[40px] flex justify-between'>

                            <div className='w-[248px] h-10 rounded-[6px] py-[9px] px-[16px] flex items-center gap-2 bg-[#F2F2F2]'>
                                <img src='Dashboard/search.svg' className='h-[15.07px] w-[15.37px]' />
                                <input className='bg-none border-none font-normal text-[15px] leading-[22px] bg-transparent outline-none h-[22px] w-[213px]' placeholder='Search by order ID...' />
                            </div>
                            <div className='w-[127px] h-[36px] flex gap-3'>
                                <div className='h-full w-[79px] flex gap-3'>
                                    <div style={{
                                        background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #D9D9D9, #D9D9D9)',
                                    }} className='h-full w-full rounded border-[1px] py-[6px] px-3 flex gap-[6px] items-center border-[#D9D9D9]'>
                                        <span className='w-[33px] h-[24px] font-normal text-[16px] leading-[24px]'>Sort</span>
                                        <div className='w-4 h-4'>
                                            <img className='w-[13.07px] h-[10.97px] relative top-[2.52px] left-[1.47px]' src='/Dashboard/UpDownArrow.svg' />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-full w-[36px] rounded border-[1px] border-[#D9D9D9]  flex justify-center items-center'>
                                    <div className='w-5 h-5 relative'>
                                        <img className='w-[17.5px] h-[17.5px] relative top-[1.25px] left-[1.25px]' src='/Dashboard/DownArrow.svg' />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='w-[1128px] h-[40px] gap-10 rounded py-[10px] text-[14px] px-3 font-medium bg-[#F2F2F2] leading-5 text-[#4D4D4D] flex'>

                            <div className='w-[246px] h-5'>
                                <span className='w-[56px] h-5'>Order ID</span>
                            </div>

                            <div className='w-[246px] h-5'>
                                <div className='w-[84px] h-full flex gap-1'>
                                    <span className='w-[72px] h-full'>Order date</span>
                                    <div className='w-2 h-2'>
                                        <img className='w-[6.97px] h-[5px] relative top-[6.6px] left-[0.52px]' src="/Dashboard/OrderDownArrow.svg" />
                                    </div>
                                </div>
                            </div>

                            <div className='w-[246px] h-5 flex justify-end'>
                                <span className='w-[93px] h-5 font-medium text-[14px] leading-5 text-[#4D4D4D]'>Order amount</span>
                            </div>

                            <div className='w-[246px] h-5 flex justify-end'>
                                <div className='w-[130px] h-full flex gap-1 items-center'>
                                    <div className='w-[112px] h-full flex gap-[2px]'>
                                        <span class="font-medium text-[14px] leading-5 text-right">Transaction fees</span>
                                    </div>
                                    <div className='w-[14px] h-[14px]'>
                                        <img className='w-[12.6px] h-[12.6px] relative top-[0.7px] left-[0.7px]' src="/Dashboard/Info.svg" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {Array.from({ length: 14 }).map((item, index) => {
                            return (
                                <div key={index} className='w-full h-[48px] border-b-[1px] py-[14px] px-3 flex gap-10'>
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
                            )
                        })}

                        <Pagination />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Overview
