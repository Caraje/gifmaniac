import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/pages/HomePage'
import { GamePage } from './components/pages/GamePage'
import { Footer } from './components/ui/Footer'

const NotFound = () => <Navigate to="/" replace />
function App () {
  return (
  <div className=" flex flex-col justify-between items-center min-h-screen">

    <a
      href='/'
      className='font-gifTitles text-6xl text-gifyellow p-2'
    >
      GifManiac
    </a>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/cinema' element={<GamePage />}/>
      <Route path='/series' element={<GamePage />}/>
      <Route path='/videogames' element={<GamePage />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    <Footer />
   </div>
  )
}

export default App
