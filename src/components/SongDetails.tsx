

const SongDetails: React.FC<{ song: any }> = ({ song }) => {
  if (!song) return null;
  return (
    <div className='h-full w-full xs:mx-6 md:m-2 rounded-3xl  bg-white bg-opacity-5 shadow-xl flex flex-col items-center'>
      <div key={song.id} className=' h-[80%]'>
        <img
          src={song.imageUrl}
          alt='songImage'
          className='h-full md:h-[80%] xs:rounded-full'
        />
      </div>
      <h1 className='h-[10%] md:pt-6'>{song.title}</h1>
      <p className='h-[10%] text-xs'>{song.artist}</p>
    </div>
  )
}

export default SongDetails
