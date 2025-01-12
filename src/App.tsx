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
        <div className='song-details h-[40%] md:h-full'>
          <SongDetails />
        </div>
        <div className='flex flex-col xs:h-[60%] md:h-full'>
          <div className='lyrics-display h-1/3 md:h-full'>
            <LyricsDisplay />
          </div>
          <div className='progressbar h-1/3 md:h-full'>
            <ProgressBar />
          </div>
          <div className='player-controls h-1/3 md:h-full'>
            <PlayerControls />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
