'use client'
import { useState } from 'react';

const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
           // document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    return (
        <>
            <div className="h-[40px] lg:h-[58px] w-full flex justify-between items-center p-5 bg-white">
                <img src="/burger.svg" alt='' className="w-[26px] h-[10px] md:w-auto md:h-auto cursor-pointer" onClick={handleMenuToggle} />
                <img src="/logo.svg" alt='' className="md:w-auto md:h-auto w-[69px] h-[16px] cursor-pointer absolute left-0 right-0 mx-auto" />
                <img src="/chat.svg" alt='' className="w-[30px] h-[30px] md:w-auto md:h-auto cursor-pointer" />
            </div>
            {isMenuOpen && (
                <div className='z-10 w-full h-auto bg-white flex flex-col'>
                    <div className=''>
                    <a href='#Jordan' className="block text-center text-black text-3xl font-semibold fursNeue  leading-loose">Jordan</a>
                    <div className="w-auto h-px mt-[10px] mb-[5px] border border-neutral-200"></div>
                    <a href='#Nike' className="block text-center text-black text-3xl font-semibold fursNeue  leading-loose">Nike</a>
                    <div className="w-auto h-px mt-[10px] mb-[5px] border border-neutral-200"></div>
                    <a href='#New Balance' className="block text-center text-black text-3xl font-semibold fursNeue  leading-loose">New Balance</a>
                    <div className="w-auto h-px mt-[10px] mb-[5px] border border-neutral-200"></div>
                    <a href='#Adidas' className="block text-center text-black text-3xl font-semibold fursNeue  leading-loose">Adidas</a>
                    <div className="w-auto h-px mt-[10px] mb-[5px] border border-neutral-200"></div>
                    <a href='#Yeezy' className="block text-center text-black text-3xl font-semibold fursNeue  leading-loose">Yeezy</a>
                    <div className="w-auto h-px mt-[10px] mb-[5px] border border-neutral-200"></div>
                    <a href='#UGG' className="block text-center text-black text-3xl font-semibold fursNeue  leading-loose">Ugg</a>
                    <div className="w-auto h-px mt-[10px] mb-[5px] border border-neutral-200"></div>
                    <div className='w-full h-auto flex justify-center flex-col xl:flex-row items-center xl:mb-[120px] mb-0'>
                        <div className="w-72  h-12 xl:w-[276px] xl:h-[75px]  bg-black mt-5 mx-[46px] xl:mx-[20px] flex justify-center items-center ">
                            <p className="text-center text-white text-sm xl:text-xl font-semibold font-['Open Sans'] leading-snug">TELEGRAM</p>
                        </div>
                        <div className=" w-72 h-12  xl:w-[276px] xl:h-[75px]  bg-black mt-5 mx-[46px] xl:mx-[20px] flex justify-center items-center  mb-[40px] xl:mb-0">
                            <p className="text-center text-white text-sm xl:text-xl font-semibold font-['Open Sans'] leading-snug">INSTAGRAM</p>
                        </div>
                    </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BurgerMenu;
