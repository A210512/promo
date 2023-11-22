import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <div className='flex xl:flex-row flex-col justify-between xl:items-center xl:mb-24'>
      <div className='customText  w-[130px] xl:w-[224px]'>Выбери свой бренд</div>
      <div className='mt-[19px] grid grid-cols-3 xl:grid-cols-6 '>
        
        <a href="#Nike" className='border border-[#E4E4E4] flex justify-center p-5 ease-in-out '>
            <img src="/brands/nike.svg" className='xl:w-[85px] xl:h-[76px] w-[54px] h-[48px]'/>
        </a>
        <a href="#Adidas" className='border border-[#E4E4E4] flex justify-center p-5'>
            <img src="/brands/adidas.svg" className='xl:w-[85px] xl:h-[76px] w-[54px] h-[48px]'/>
        </a>
        <a href="#Jordan" className='border border-[#E4E4E4] flex justify-center p-5'>
            <img src="/brands/jordan.svg" className='xl:w-[85px] xl:h-[76px] w-[54px] h-[48px]'/>
        </a>
        <a href="#Yeezy" className='border border-[#E4E4E4] flex justify-center p-5'>
            <img src="/brands/jeezy.svg"  className='xl:w-[85px] xl:h-[76px] w-[54px] h-[48px]'/>
        </a>
        <a href="#New Balance" className='border border-[#E4E4E4] flex justify-center p-5'>
            <img src="/brands/nb.svg"  className='xl:w-[85px] xl:h-[76px] w-[54px] h-[48px]'/>
        </a>
        <a href="#Ugg" className='border border-[#E4E4E4] flex justify-center p-5'>
            <img src="/brands/ugg.svg"  className='xl:w-[85px] xl:h-[76px] w-[54px] h-[48px]'/>
        </a>
      </div>
    </div>
  )
}

export default Brands
