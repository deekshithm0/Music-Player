import './App.css'
import ProgressBar from './components/ProgressBar'
import LyricsDisplay from './components/LyricsDisplay'
import SongDetails from './components/SongDetails'
import PlayerControls from './components/PlayerControls'
import Header from './components/Header'
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query'

const fetchSongs = async () => {
  const response = await fetch('./Songs.json')
  if (!response.ok) {
    throw new Error('Network Response not okay')
  }
  return response.json()
}

function App () {
  const { data, error, isLoading } = useQuery({
    queryKey: ['songs'],
    queryFn: fetchSongs
  })

  const [currentSongIndex, setCurrentSongIndex] = useState(0)

  const handleNext = () => {
    if (data && currentSongIndex < data.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (data && currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1)
    }
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching songs: {error.message}</div>

  return (
    <div className='App'>
      <div className='header'>
        <Header />
      </div>
      <div className='container h-[90vh] md:grid md:grid-cols-2'>
        <div className='song-details h-[50%] md:h-full md:p-4 flex items-center justify-center'>
          <SongDetails song={data[currentSongIndex]} />
        </div>
        <div className='flex flex-col xs:h-[50%] md:h-full'>
          <div className='lyrics-display h-1/2 md:h-full'>
            <LyricsDisplay lyrics={data[currentSongIndex]}/>
          </div>
          <div className='progressbar h-1/6  flex items-end justify-center'>
            <ProgressBar />
          </div>
          <div className='player-controls h-5/6 '>
            <PlayerControls onNext={handleNext} onPrevious={handlePrevious} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
