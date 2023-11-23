'use client'
import Image from 'next/image';
import React from 'react'

{/* <Image
src={item.img}
width="0"
height="0"
sizes="100vw"
alt=''
style={{ width: '100%', height: 'auto' }}

/> */}

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
  const combineProducts = (data: any[]) => {
    const groupedProducts: { [sku: string]: any } = {};

    data.forEach((item) => {
      const { sku, sizeEU } = item;

      if (groupedProducts[sku]) {
        if (!groupedProducts[sku].sizeEU.includes(sizeEU)) {
          groupedProducts[sku].sizeEU.push(sizeEU);
        }
      } else {
        groupedProducts[sku] = { ...item, sizeEU: [sizeEU] };
      }
    });

    const combinedData = Object.values(groupedProducts);
  
    return combinedData;
  };

  const combinedData = combineProducts(data);
  const commonCardJSX = (item: any, index: any) => (
<div className='flex flex-col items-center' key={index}>
    <img src={item.img ? item.img : '/noimage.png'} />
  <div className="flex flex-col items-center h-auto md:h-auto">
    <p className='cardsText lg:text-lg text-[10px] text-center h-auto w-[85%]'>{item.modelName}</p>
    <div className=''>
    <p className='priceText lg:text-lg text-xs text-center'>{item.salePrice} ₽</p>
    <div className="w-full h-auto flex flex-row justify-center items-start">
      <div className="left-0 top-[7px]  text-black text-xs lg:text-xl font-normal font-['Open Sans'] leading-3 font-bold p-1">EU</div>
      <div className='flex flex-wrap gap-1 xl:gap-2'>
        {item.sizeEU.map((size: any, index: number) => (
          <div key={index} className="left-[27px] top-[5px] text-black text-xs lg:text-xl font-normal font-['Open Sans']  border border-neutral-200 leading-none p-1 ">{size}</div>
        ))}
      </div>
      </div>
    </div>
  </div>
</div>

  );

  const filteredCards = showAllModels
    ? combinedData.map(commonCardJSX)
    : combinedData.slice(0, windowWidth < 768 ? 2 : cols).map(commonCardJSX);
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
