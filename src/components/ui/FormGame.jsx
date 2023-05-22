import React from 'react'

const FormGame = ({ surrender, isCorrect, nextGif, handleAnswer }) => {
  return (
    <form onSubmit={(event) => { handleAnswer(event) }} className='w-full flex flex-col sm:flex-row gap-4'>
            <input name='title' className='w-full sm:w-4/5 p-4 rounded-xl border-2 border-gifyellow text-gifBlack font-montserrat font-medium text-xl' />
            {
              (surrender || isCorrect)
                ? (
                  <button
                  type='button'
                  onClick={nextGif}
                  className='w-full sm:w-1/5 bg-gifyellow text-gifBlack rounded-xl border-2 border-gifGreen font-montserrat font-bold text-xl hover:scale-105 hover:brightness-90 transition-all'
                  >
                      Siguiente
                  </button>
                  )
                : (
                    <button className='w-full sm:w-1/5 bg-gifGreen rounded-xl border-2 border-gifGreen font-montserrat font-bold text-xl hover:scale-105 hover:brightness-90 transition-all'
                    >
                      Enviar
                    </button>

                  )
                  }
          </form>
  )
}

export default FormGame
