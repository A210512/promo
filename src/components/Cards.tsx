'use client'
import React from 'react'

const Cards = ({ name, data, cols }: { name: any, data: any, cols: number}) => {
  const [showAllModels, setShowAllModels] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState<number>(0);

  React.useEffect(() => {

    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const commonCardJSX = (item: any, index: any) => (
    <div className='flex flex-col items-center' key={index}>
      <div className='w-auto h-auto bg-white flex justify-center'>
        <img src={item.img ? item.img : '/noimage.png'} />
      </div>
      <p className='cardsText lg:text-lg text-xs text-center'>{item.modelName}</p>
      <p className='priceText  lg:text-lg text-xs text-center'>От {item.salePrice}₽</p>
      <div className="w-full h-7 flex flex-row justify-center items-center">
        <div className="left-0 top-[7px]  text-black text-sm font-normal font-['Open Sans'] leading-3 font-bold p-1">EU</div>
        <div className="left-[27px] top-[5px]  text-black text-sm font-normal font-['Open Sans']  border border-neutral-200 leading-none p-1">{item.sizeEU}</div>
      </div>
    </div>
  );

  const filteredCards = showAllModels
    ? data.map(commonCardJSX)
    : data.slice(0, windowWidth < 768 ? 2 : cols).map(commonCardJSX);
    if(!windowWidth){
      return(
        <div></div>
      )
    }
  return (
    <div id={name}>
      <div className='customText mt-5'>{name}</div>
      <div className={`mt-5 grid grid-cols-2 ${cols ===3? ' md:grid-cols-3': cols===4? 'md:grid-cols-4': ''} gap-[15px]`}>
        {filteredCards}

      </div>

      <a href={!showAllModels ? `#${name}` : undefined} className="w-auto md:w-[185px] h-12  bg-black mt-5 mx-[46px] md:mx-auto flex justify-center items-center "
        onClick={() => setShowAllModels(!showAllModels)}>
        <p className="text-center text-white text-sm font-semibold font-['Open Sans'] leading-snug"> {showAllModels ? 'СКРЫТЬ МОДЕЛИ' : 'ВСЕ МОДЕЛИ'}</p>
      </a>
      <div className="w-auto h-px my-[40px] border border-neutral-200"></div>
    </div>
  )
}

export default Cards
