import Image from 'next/image'
import styles from '../components/footer/footer.module.scss'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-gray-300 to-gray-100'>
      <div className='flex items-center flex-col gap-10 justify-center h-[100vh] '>
        <Image
          src='/yoodjee_logo.svg'
          width={300}
          height={100}
          alt='yoodjee logo'
        />
        <div className={styles.button_block}>
          <Link
            href='https://intagram.com/yoodjee'
            target='_blank'
            className='button white fursNeue'
          >
            Instagram
          </Link>
          <Link
            href='https://t.me/theyoodjee'
            target='_blank'
            className='button white fursNeue'
          >
            Telegram
          </Link>
          <Link
            href='https://wa.me/79804238759'
            target='_blank'
            className='button white fursNeue'
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
