import BurgerMenu from './BurgerMenu'
// import HeaderImg from './HeaderImg'

export default function Header() {
  return (
    <header>
      <div
        style={{
          backgroundImage: 'url(/bgimage.jpg)',
          backgroundSize: 'cover',
          height: '55vh',
        }}
      >
        <BurgerMenu />

        <div className='w-full h-full flex justify-center flex-col items-center'>
          <div className='text-gray-50 text-4xl xl:text-9xl font-semibold fursNeue leading-[3.3rem] mt-[148px] text-center uppercase'>
            summer
            <br />
            sale
          </div>
          <div className='text-lime-300 text-xl xl:text-5xl font-medium fursNeue'>
            СКИДКА ДО 50%
          </div>
          <div className='text-white fursNeue text-sm xl:text-4xl mb-[91px]'>
            с 1 по 30 июня
          </div>
        </div>
      </div>
    </header>
  )
}
