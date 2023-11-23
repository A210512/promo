import React from 'react'

const ContactsModel = ({
  setShowContacts,
  showContacts,
}: {
  setShowContacts: any
  showContacts: any
}) => {
  return (
    <div className='fixed bottom-0 right-0 md:bottom-2 md:right-2 bg-black w-full md:w-[250px] py-[20px] flex justify-center phone-contacts z-20 rounded-lg'>
      <span
        className='text-white font-bold absolute right-3 top-1 cursor-pointer'
        onClick={() => setShowContacts(!showContacts)}
      >
        X
      </span>
      <div className='flex flex-col justify-center items-center gap-3'>
        <div className='flex flex-row items-center gap-4 cursor-pointer'>
          <img src='/wapp.svg' alt='' />
          <a
            href='https://wa.me/79804238759'
            target='_blank'
            className='text-white text-sm'
          >
            Написать в WhatsApp
          </a>
        </div>
        <div className='flex flex-row items-center gap-4 cursor-pointer'>
          <img src='/tg.svg' alt='' />
          <a
            href='https://t.me/theyoodjee'
            target='_blank'
            className='text-white text-sm'
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactsModel
