import BurgerMenu from './BurgerMenu'
// import HeaderImg from './HeaderImg'

export default function Header() {
  return (
    <header>
      <div
        style={{
          backgroundImage: 'url(/bgimage.jpg)',
          backgroundSize: 'cover',
          height: '45vh',
        }}
      >
        <BurgerMenu />

        <div className='w-full h-full flex justify-center flex-col items-center'>
          <div className='text-gray-50 text-6xl xl:text-9xl font-semibold fursNeue leading-[3.3rem] mt-[93px]'>
            BLACK
            <br />
            FRIDAY
          </div>
          <div className='text-lime-300 text-xl xl:text-5xl font-medium fursNeue'>
            СКИДКА ДО 70%
          </div>
          <div className='text-white fursNeue text-sm xl:text-4xl mb-[91px]'>
            С 24.11 по 26.11
          </div>
        </div>
      </div>
    </header>
  )
}
