import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='flex flex-row w-full justify-between items-center xs:px-6 xs:text-xs md:px-4'>
      <FontAwesomeIcon icon={faChevronLeft} />
      <h1 className=''>PLAYING FROM PLAYLIST</h1>
      <FontAwesomeIcon icon={faEllipsisVertical} />
    </div>
  )
}

export default Header
