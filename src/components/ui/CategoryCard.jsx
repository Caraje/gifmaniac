
export const CategoryCard = ({ name, img, url, alt }) => {
  return (
    <a
      href={url}
      className="relative rounded-2xl overflow-hidden hover:scale-110 transition-all h-auto w-[300px] shadow-lg hover:shadow-2xl"
    >
      <h2
        className="absolute w-full bg h-full font-gifTitles text-5xl text-transparent flex justify-center items-center
        hover:text-gifWhite hover:backdrop-blur-md transition-all hover:backdrop-brightness-75"
      >
        {name}
      </h2>
      <img
        src={img}
        alt={alt}
        width={300}
        className="object-cover h-auto w-[300px]"
      />
    </a>
  )
}
