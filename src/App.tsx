import './App.css'
import ProgressBar from './components/ProgressBar'
import LyricsDisplay from './components/LyricsDisplay'
import SongDetails from './components/SongDetails'
import PlayerControls from './components/PlayerControls'
import Header from './components/Header'

function App () {
  return (
    <div className='App'>
      <div className='header'>
        <Header />
      </div>
      <div className='container h-[90vh] md:grid md:grid-cols-2'>
        <div className='song-details h-[50%] md:h-full md:p-4 flex items-center justify-center'>
          <SongDetails />
        </div>
        <div className='flex flex-col xs:h-[50%] md:h-full'>
          <div className='lyrics-display h-1/2 md:h-full'>
            <LyricsDisplay />
          </div>
          <div className='progressbar h-1/6  flex items-end justify-center'>
            <ProgressBar />
          </div>
          <div className='player-controls h-5/6 '>
            <PlayerControls />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
