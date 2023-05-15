
export const Footer = () => {
  return (
    <footer className="w-full max-w-[1000px] flex items-center justify-between " >
      <section className="max-w-md">
        <img src="/static_img/LogoCarlos.webp" width={932} height={226}/>
        {/* redes */}
      </section>
      <p className="font-montserrat max-w-[30ch] text-right">El copyright de las ilustraciones pertenece a <a href="https://www.dan-mumford.com/" target="_blank" rel="noreferrer" className=" font-montserrat font-bold text-gifyellow">Dan Mumford</a></p>
    </footer>
  )
}
