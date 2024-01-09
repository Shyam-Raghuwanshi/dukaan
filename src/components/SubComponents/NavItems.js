import React from 'react'
import { Items } from '../../constant/NavItems'

function NavItems() {
    return (
        <div className='flex gap-1 flex-col w-52 h-[1314px]'>
            {
                Items.map((item, index) => {
                    return (
                        <div key={index} className='flex gap-3 h-9 w-52 py-2 px-4 rounded cursor-pointer opacity-[80%] hover:bg-[#FFFFFF] hover:bg-opacity-[10%] hover:opacity-[100%]'>
                            <div className='h-5 w-5'>
                                <img className={`relative ${item.className}`} src={item.icon} />
                            </div>
                            <span className='font-medium text-[14px] leading-5'>{item.name}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NavItems