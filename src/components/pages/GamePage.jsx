export const GamePage = () => {
  console.log(window.location.pathname)
  const pathName = window.location.pathname
  const data = pathName === '/cinema' ? 'Cine' : pathName === '/series' ? 'Series' : 'Videojuegos'
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gifBlue">
      Esta es la pantalla de juego de {data}
      <a href="/">Volver</a>
    </div>
  )
}
