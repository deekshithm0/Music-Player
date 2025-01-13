

const LyricsDisplay = ({lyrics}) => {
  console.log()
  return (
    <div className="flex items-center justify-center p-4">
    <p className="text-center text-sm">{lyrics.lyrics}</p>
  </div>
  )
}

export default LyricsDisplay