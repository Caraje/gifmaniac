import { useFetchGifs } from '../../hooks/useFetchGifs'
import { useHandleGame } from '../../hooks/useHandleGame'

import { cinema } from '../../db/cinema.json'
import { series } from '../../db/series.json'
import { videogames } from '../../db/videogames.json'

import { OptionsGame } from '../ui/OptionsGame'
import GifCanvas from '../ui/GifCanvas'
import BannerTitleLevel from '../ui/BannerTitleLevel'
import FormGame from '../ui/FormGame'

import { DESCRIPTION_SECTION } from '../../utils/consts'

import Confetti from 'react-confetti'
import { Shake } from 'reshake'

const pathName = window.location.pathname
const category = pathName === '/cinema' ? 'Cine' : pathName === '/series' ? 'Series' : 'Videojuegos'
const categoryList = category === 'Cine' ? cinema : category === 'Series' ? series : videogames
const titlesList = categoryList.map((cat) => { return { title: cat.original_title, correctTitles: cat.titles } }).sort((a, b) => 0.5 - Math.random())

export const GamePage = () => {
  const { handleMoviePosition, handleGifPosition, userSurrender, handleAnswer, game } = useHandleGame(titlesList)

  const { data, loading } = useFetchGifs(titlesList[game.moviePosition].title)
  const descriptionLevel = Object.entries(DESCRIPTION_SECTION)
    .filter((el) => el[0] === category)

  return (
    <main className="w-screen  flex flex-col justify-center items-center gap-10 -gifBlue p-4">
      <section className='w-full max-w-[1000px] flex flex-col gap-4'>
        <header className='flex flex-col sm:flex-row justify-between items-center sm:items-end'>
          <h1 className='font-gifTitles text-5xl sm:text-7xl text-gifyellow'>{category}</h1>
          <OptionsGame
            numPosition={handleMoviePosition}
            gifPosition={handleGifPosition}
            reveal={userSurrender}
          />
        </header>
        <footer className='w-full flex flex-col gap-4 justify-center items-center'>
          {game.isCorrect && <Confetti className='absolute w-full'/>}
          <div className='relative w-full flex justify-center items-center border-2 border-gifyellow rounded-2xl overflow-hidden'>
            {
              (game.isSurrender || game.isCorrect) && (
                <BannerTitleLevel surrender={game.isSurrender} title={titlesList[game.moviePosition].title}/>
              )
            }
            <GifCanvas loading={loading} data={data} game={game.gifPosition}/>
          </div>
          <h2 className='font-montserrat font-semibold text-gifyellow text-lg '>{descriptionLevel[0][1]}</h2>
          <Shake
            h={game.isError ? 5 : 0}
            v={game.isError ? 5 : 0}
            r={game.isError ? 3 : 0}
            dur={60}
            int={0.5}
            max={100}
            fixed={true}
            fixedStop={false}
            active={game.isError}
            className='w-full'
          >
            <FormGame surrender={game.isSurrender} isCorrect={game.isCorrect} nextGif={handleMoviePosition} handleAnswer={handleAnswer} />
        </Shake>
        </footer>

      </section>
    </main>
  )
}
