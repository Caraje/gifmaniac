import { buttonsGame } from '../../db/buttons'

export const OptionsGame = () => {
  return (
    <nav className='flex items-center justify-center gap text-gifyellow'>
            {
              buttonsGame.map(btn => (
                btn.href
                  ? (
                    <a
                      key={btn.id}
                      href={btn.href}
                      className=' hover:bg-gifGreen rounded-full p-1 hover:scale-110 hover:brightness-110 transition-all'
                    >
                      {btn.icon}
                    </a>
                    )
                  : (
                    <button
                      key={btn.id}
                      className='hover:bg-gifGreen rounded-full p-1 hover:scale-110 hover:brightness-110 transition-all'
                    >
                      {btn.icon}
                    </button>
                    )
              ))
            }
          </nav>
  )
}
