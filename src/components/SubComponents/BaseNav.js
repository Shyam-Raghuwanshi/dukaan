import React from 'react'

function BaseNav() {
    return (
        <div className='bg-[#353C53] rounded px-3 py-[6px] flex gap-[10px] w-48 h-[54px]'>
            <div className='w-9 h-9 bg-[#FFFFFF] bg-opacity-[10%] p-[6px] rounded gap-[10px]'>
                <img className='w-[23.6px] h-[19.6px] top-[2.2px] left-[0.2px] relative' src="Navbar/Wallet.svg" />
            </div>
            <div className='w-[101px] h-[42px]'>
                <span className='font-normal text-[13px] leading-4 w-[101px] block h-4 opacity-[80%] rounded'>Available credits</span>
                <span className='font-medium text-xs leading-6 w-[51px] h-6'>222.10</span>
            </div>
        </div>
    )
}

export default BaseNav;