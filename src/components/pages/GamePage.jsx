import { OptionsGame } from '../ui/OptionsGame'

export const GamePage = () => {
  console.log(window.location.pathname)
  const pathName = window.location.pathname
  const category = pathName === '/cinema' ? 'Cine' : pathName === '/series' ? 'Series' : 'Videojuegos'

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-10 bg-gifBlue p-4">
      <section className='w-full max-w-[1000px] flex flex-col gap-4'>
        <header className='flex  justify-between items-end'>
          <h1 className='font-gifTitles text-7xl text-gifyellow'>{category}</h1>
          <OptionsGame />
        </header>
        <footer className='w-full flex flex-col gap-4 justify-center items-center'>
          <div className='relative w-full flex justify-center items-center border-2 border-gifyellow rounded-2xl overflow-hidden'>
            <img className='w-full max-h-[600px] object-contain z-10' src='/static_img/mario3.gif'/>
            <img className=' absolute w-full max-h-[600px] object-cover blur-lg' src='/static_img/mario3.gif'/>
          </div>
          <form className='w-full flex gap-4'>
            <input className='w-4/5 p-4 rounded-xl border-2 border-gifyellow text-gifBlack font-montserrat font-medium text-xl' />
            <button className='w-1/5 bg-gifGreen rounded-xl border-2 border-gifGreen font-montserrat font-bold text-xl hover:scale-105 hover:brightness-90 transition-all'>Enviar</button>
          </form>
        </footer>

      </section>
    </main>
  )
}
