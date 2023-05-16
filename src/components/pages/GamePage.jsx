import { useState } from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { OptionsGame } from '../ui/OptionsGame'
import { cinema } from '../../db/cinema.json'

const pathName = window.location.pathname
const category = pathName === '/cinema' ? 'Cine' : pathName === '/series' ? 'Series' : 'Videojuegos'
const titlesList = cinema.map((mov) => { return { title: mov.original_title, posibilities: mov.titles } }).sort((a, b) => 0.5 - Math.random())

export const GamePage = () => {
  const [moviePosition, setMoviePosition] = useState(0)
  const [gifPosition, setGifPosition] = useState(0)
  const { data, loading } = useFetchGifs(titlesList[moviePosition].title)

  // console.log({ data })
  const [isSurrender, setIsSurrender] = useState(false)
  const [isCorrect, setIscorrect] = useState(false)
  const [numberOfErrors, setNumberOfErrors] = useState(0)
  const handleMoviePosition = () => {
    setMoviePosition(moviePosition + 1)
    setIscorrect(false)
    setNumberOfErrors(0)
  }
  const handleGifPosition = () => {
    setGifPosition(gifPosition + 1)
  }
  const handleReveal = () => {
    setIsSurrender(true)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const { title } = Object.fromEntries(formData.entries())
    if (titlesList[moviePosition].posibilities.includes(title)) {
      setIscorrect(true)
      return
    }
    setNumberOfErrors(numberOfErrors + 1)
  }

  return (
    <main className="w-screen  flex flex-col justify-center items-center gap-10 bg-gifBlue p-4">
      <section className='w-full max-w-[1000px] flex flex-col gap-4'>
        <header className='flex flex-col sm:flex-row justify-between items-center sm:items-end'>
          <h1 className='font-gifTitles text-5xl sm:text-7xl text-gifyellow'>{category}</h1>
          <h3>Numero de errores {numberOfErrors}</h3>
          <OptionsGame
            numPosition={handleMoviePosition}
            gifPosition={handleGifPosition}
            reveal={handleReveal}
          />
        </header>
        <footer className='w-full flex flex-col gap-4 justify-center items-center'>
          <div className='relative w-full flex justify-center items-center border-2 border-gifyellow rounded-2xl overflow-hidden'>
            {
              (isSurrender || isCorrect) && (
                <div className={`absolute bottom-0 z-20 w-full ${isSurrender ? 'bg-red-900/80' : 'bg-gifGreen/80'} text-gifBlack flex justify-center items-center`}>
                <h2
                  className='text-center font-gifTitles text-gifWhite text-5xl py-4 max-w-sm'
                  >
                  {titlesList[moviePosition].title}
                </h2>
                </div>
              )
            }
            {
              loading
                ? <h1>cargando</h1>
                : (<>
                <img className='w-full max-h-[600px] object-contain z-10' src={data[gifPosition]?.url}/>
                <img className=' absolute w-full max-h-[600px] object-cover blur-lg' src={data[gifPosition]?.url}/>
              </>)
            }
          </div>
          <h2 className='font-montserrat font-semibold text-gifyellow text-lg '>Adivina el {category} con el Gif</h2>
          <form onSubmit={handleSubmit} className='w-full flex flex-col sm:flex-row gap-4'>
            <input name='title' className='w-full sm:w-4/5 p-4 rounded-xl border-2 border-gifyellow text-gifBlack font-montserrat font-medium text-xl' />
            {
              (!isCorrect)
                ? (
                <button className='w-full sm:w-1/5 bg-gifGreen rounded-xl border-2 border-gifGreen font-montserrat font-bold text-xl hover:scale-105 hover:brightness-90 transition-all'>Enviar</button>
                  )
                : (
                  <button
                  onClick={handleMoviePosition}
                    className='w-full sm:w-1/5 bg-gifyellow text-gifBlack rounded-xl border-2 border-gifGreen font-montserrat font-bold text-xl hover:scale-105 hover:brightness-90 transition-all'
                  >
                    Siguiente
                  </button>
                  )
            }
          </form>
        </footer>

      </section>
    </main>
  )
}
