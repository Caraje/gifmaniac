import { useState } from 'react'

const initialStateGame = {
  moviePosition: 0,
  gifPosition: 0,
  isSurrender: false,
  isCorrect: false,
  isError: false
}

export const useHandleGame = (titlesList) => {
  const [game, setGame] = useState(initialStateGame)

  const handleMoviePosition = () => {
    setGame({
      moviePosition: game.moviePosition + 1,
      gifPosition: 0,
      isSurrender: false,
      isCorrect: false,
      isError: false
    })
  }

  const handleGifPosition = () => {
    setGame({
      moviePosition: game.moviePosition,
      gifPosition: game.gifPosition + 1,
      isSurrender: false,
      isCorrect: false,
      isError: false
    })
  }

  const userSurrender = () => {
    setGame({
      moviePosition: game.moviePosition,
      gifPosition: game.gifPosition,
      isSurrender: true,
      isCorrect: false,
      isError: false
    })
  }

  const handleAnswer = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const { title } = Object.fromEntries(formData.entries())
    const titleLowerCase = title.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const correctTitles = titlesList[game.moviePosition].correctTitles.map(title => title.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
    if (correctTitles.includes(titleLowerCase)) {
      setGame({
        moviePosition: game.moviePosition,
        gifPosition: game.gifPosition,
        isSurrender: false,
        isCorrect: true,
        isError: false
      })
      return
    }
    setGame({
      moviePosition: game.moviePosition,
      gifPosition: game.gifPosition + 1,
      isSurrender: false,
      isCorrect: false,
      isError: true
    })
    setTimeout(() => {
      setGame({
        moviePosition: game.moviePosition,
        gifPosition: game.gifPosition,
        isSurrender: false,
        isCorrect: false,
        isError: false
      })

      handleGifPosition()
    }, 200)
    form.reset()
  }

  return {
    handleMoviePosition,
    handleGifPosition,
    userSurrender,
    handleAnswer,
    game
  }
}
