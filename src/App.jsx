import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/pages/HomePage'
import { GamePage } from './components/pages/GamePage'

const NotFound = () => <Navigate to="/" replace />
function App () {
  return (
  // <div className="w-screen h-screen flex justify-center items-center bg-gifBlue">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/cinema' element={<GamePage />}/>
        <Route path='/series' element={<GamePage />}/>
        <Route path='/videogames' element={<GamePage />}/>
        <Route path='*' element={<NotFound />}/>

      </Routes>

  // </div>
  )
}

export default App
