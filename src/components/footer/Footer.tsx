import Link from 'next/link'
import styles from './footer.module.scss'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={`wrapper ${styles.footer_top__container}`}>
          <div className={styles.left}>
            <p className={`fursNeue ${styles.title}`}>
              Не нашли нужную модель?
            </p>
            <p className={`fursNeue ${styles.title_sub}`}>
              Напишите нам и мы составим подборку в вашем размере
            </p>
            <div className={styles.button_block}>
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
          <div className={styles.right}>
            <img src='/airforce.png' alt='Nike Air Force' />
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <i className={styles.text}></i>
      </div>
    </footer>
  )
}
