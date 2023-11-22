import React from 'react'
// <img src='/footer.svg' className="w-[100vh] md:w-auto absolute  z-[-1]"/>
const Footer = () => {
  return (
    <footer className='mt-7'>
      <div style={{backgroundImage: 'url(/footer.svg)'}}>
       
        <div className='w-full h-full flex justify-center flex-col items-center xl:items-start xl:pl-52 xl:pt-44'>
        <div className='flex items-end mb-0 xl:mb-[316px] '>
        <div className='flex flex-col items-center xl:items-start'>
        <div className="w-60 xl:w-[510px] text-center xl:text-start text-white text-2xl xl:text-6xl font-semibold fursNeue leading-snug mt-7">Не нашли нужную модель?</div>
        <div className="w-48 xl:w-[393px] xl:mt-8 mt-0 text-center xl:text-start text-white text-xs xl:text-2xl font-normal font-['Open Sans']">Напишите нам, мы найдем ее для Вас и оформим индивидуальный заказ со скидкой 10%.</div>
        <div className='flex flex-col xl:flex-row'>
        <div className="w-72  h-12 xl:w-[198px] xl:h-[54px] bg-white mt-5 mx-[46px] xl:mx-0 flex justify-center items-center ">
                <p className="text-center text-black text-sm font-semibold font-['Open Sans'] leading-snug">TELEGRAM</p>
            </div>
            <div className=" w-72 h-12 xl:w-[198px] xl:h-[54px]  bg-white mt-5 mx-[46px] flex justify-center items-center  mb-[40px] xl:mb-0">
                <p className="text-center text-black text-sm font-semibold font-['Open Sans'] leading-snug">INSTAGRAM</p>
            </div>
            </div>
            </div>
            <div>
            <img src="/footerImg.svg"  className='hidden xl:block'/>
            </div>
            </div>
        </div>

        </div>

        <div className="w-full h-14 bg-white">
        <div className="text-black text-base font-semibold fursNeue uppercase leading-7 text-center mt-[10px]">BLACK FRIDAY 23.11 по 26.11</div>
            </div>
    </footer>
  )
}

export default Footer
