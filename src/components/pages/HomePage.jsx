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
          <p>Selecciona una de las categorías disponibles y adivina cuál es el título de la película, serie o videojuego mediante los gifs animados que aparecerán en pantalla. Los gifs son generados de manera aleatoria utilizando la API de <a href='https://giphy.com/' target='_blank' rel='noreferrer' className='font-bold text-gifyellow'>giphy.com</a>, así que ten en cuenta que es posible que no sean completamente exactos.</p>
        </div>
    </main>
  )
}
