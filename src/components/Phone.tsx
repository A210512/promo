'use client'
import React, { useState } from 'react'
import ContactsModel from './ContactsModel'

const Phone = () => {
  const [showContacts, setShowContacts] = useState<boolean>(false)
  return (
    <>
      <div
        className='fixed right-3 bottom-5 cursor-pointer'
        onClick={() => setShowContacts(true)}
      >
        <img
          src='/phone.svg'
          alt=''
          className='w-10 h-10 bg-white rounded-md'
        />
      </div>
      {showContacts && (
        <ContactsModel
          setShowContacts={setShowContacts}
          showContacts={showContacts}
        />
      )}
    </>
  )
}

export default Phone
