import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle } from '@fortawesome/free-solid-svg-icons'
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faForwardStep } from '@fortawesome/free-solid-svg-icons'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const PlayerControls = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center xs:gap-8 xs:pt-5 md:pt-10'>
      <div className='w-full flex justify-evenly'>
        <FontAwesomeIcon icon={faShuffle} />
        <FontAwesomeIcon icon={faBackwardStep} />
        <FontAwesomeIcon icon={faPause} />
        <FontAwesomeIcon icon={faForwardStep} />
        <FontAwesomeIcon icon={faRepeat} />
      </div>
      <div className='w-full flex justify-between xs:px-11'>
        <FontAwesomeIcon icon={faDownload} />
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  )
}

export default PlayerControls
