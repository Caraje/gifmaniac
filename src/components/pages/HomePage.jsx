import { categories } from '../../db/categories'
import { CategoryCard } from '../ui/CategoryCard'

export const HomePage = () => {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-10 bg-gifBlue ">
      <h1 className='font-gifTitles text-5xl'>Seleccione una categoria</h1>
      <section className='flex justify-center items-center gap-10'>
        {
          categories.map(cat => (
            <CategoryCard
            key={cat.id}
            name= {cat.name}
            img={cat.img}
            url={cat.url}
            alt={cat.alt}
            />
          ))
        }
        </section>
        <div className='font-montserrat max-w-[74ch] text-center text-gifWhite text-lg'>
          <p>Selecciona una de las categorias disponibles y adivina cual es el titulo de la pelicula, serie o videojuego mediante los gifs animados que te saldran en pantalla.</p>
          <p>Los gifs son generados de manera aleatoria usando la API de <a href='https://giphy.com/' target='_blank' rel='noreferrer' className='font-bold text-gifyellow'>giphy.com</a>, asi que ten en cuenta que puede que no sean del todo exactas.</p>
        </div>
    </main>
  )
}
