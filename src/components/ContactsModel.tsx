import React from 'react'

const ContactsModel = ({setShowContacts, showContacts} :{setShowContacts: any, showContacts: any}) => {
  return (
<div className='fixed bottom-0 right-0 md:bottom-2 md:right-2 bg-black w-full md:w-[350px] h-[100px] flex justify-center phone-contacts z-20'>
        <span className='text-white font-bold absolute left-3 top-1 cursor-pointer'
        onClick={()=> setShowContacts(!showContacts)}>X</span>
    <div className="flex flex-col justify-center items-center">
        <div className='flex flex-row items-center gap-4 cursor-pointer'>
        <img src="/wapp.svg" alt='' />
        <a className='text-white text-sm'>Написать в WhatsApp</a>
        </div>
        <div className='flex flex-row items-center gap-4 cursor-pointer'>
        <img src="/tg.svg" alt=''/>
        <a className='text-white text-sm'>Написать в Telegram</a>
        </div>
    </div>
    </div>
  )
}

export default ContactsModel
