
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle } from '@fortawesome/free-solid-svg-icons'
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faForwardStep } from '@fortawesome/free-solid-svg-icons'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const PlayerControls = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center xs:gap-8 xs:pt-5 md:pt-10'>
      <div className='w-full flex justify-evenly'>
        <FontAwesomeIcon icon={faShuffle} className="text-xl md:text-lg lg:text-2xl"  />
        <FontAwesomeIcon icon={faBackwardStep} className="text-xl md:text-lg lg:text-2xl"  />
        <FontAwesomeIcon icon={faPause} className="text-xl md:text-lg lg:text-2xl" />
        <FontAwesomeIcon icon={faForwardStep} className="text-xl md:text-lg lg:text-2xl"  />
        <FontAwesomeIcon icon={faRepeat} className="text-xl md:text-lg lg:text-2xl"  />
      </div>
      <div className='w-full flex justify-between xs:px-11 md:px-16'>
        <FontAwesomeIcon icon={faDownload} className="text-xl md:text-lg lg:text-2xl"  />
        <FontAwesomeIcon icon={faChevronDown} className="text-xl md:text-lg lg:text-2xl xs:pt-12 md:pt-20 "/>
        <FontAwesomeIcon icon={faHeart} className="text-xl md:text-lg lg:text-2xl"  />
      </div>
    </div>
  )
}

export default PlayerControls
