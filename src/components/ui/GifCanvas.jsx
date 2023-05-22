import React from 'react'

const GifCanvas = ({ loading, data, game }) => {
  return (

    loading
      ? <h1>cargando</h1>
      : (<>
        <img className='w-full max-h-[600px] object-contain ' src={data[game]?.url}/>
        <img className=' absolute w-full max-h-[600px] object-cover blur-lg -z-10' src={data[game]?.url}/>
      </>)

  )
}

export default GifCanvas
