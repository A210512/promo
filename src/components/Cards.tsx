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
  const combineProducts = (data: any[]) => {
    // Используем объект для группировки товаров по sku
    const groupedProducts: { [sku: string]: any } = {};
  
    // Обходим исходный массив товаров
    data.forEach((item) => {
      const { sku, sizeEU } = item;
  
      // Если у нас уже есть товар с таким sku
      if (groupedProducts[sku]) {
        // Проверяем, чтобы размер не дублировался
        if (!groupedProducts[sku].sizeEU.includes(sizeEU)) {
          groupedProducts[sku].sizeEU.push(sizeEU);
        }
      } else {
        // Если товара с таким sku еще нет, создаем новую запись
        groupedProducts[sku] = { ...item, sizeEU: [sizeEU] };
      }
    });
  
    // Преобразуем объект обратно в массив
    const combinedData = Object.values(groupedProducts);
  
    return combinedData;
  };
  
  // Применяем функцию объединения данных
  const combinedData = combineProducts(data);
  const commonCardJSX = (item: any, index: any) => (
    <div className='flex flex-col items-center' key={index}>
      <div className='w-auto h-auto bg-white flex justify-center'>
        <img src={item.img ? item.img : '/noimage.png'} />
      </div>
      <p className='cardsText lg:text-lg text-xs text-center h-8 lg:h-12'>{item.modelName}</p>
      <p className='priceText  lg:text-lg text-xs text-center'>От {item.salePrice}₽</p>
      <div className="w-full h-auto flex flex-row justify-center items-start">
        <div className="left-0 top-[7px]  text-black text-xl font-normal font-['Open Sans'] leading-3 font-bold p-1">EU</div>
        <div className='flex flex-wrap'>
        {item.sizeEU.map((size: any, index: number)=>(
        <div key={index} className="left-[27px] top-[5px]  text-black text-xs font-normal font-['Open Sans']  border border-neutral-200 leading-none p-1">{size}</div>
        ))}
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
