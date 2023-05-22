import React from 'react'

const BannerTitleLevel = ({ surrender, title }) => {
  return (
    <div className={`absolute bottom-0 z-20 w-full ${surrender ? 'bg-red-900/80' : 'bg-gifGreen/80'} text-gifBlack flex justify-center items-center`}>
      <h2 className='text-center font-gifTitles text-gifWhite text-5xl py-4 max-w-sm' >
        {title}
      </h2>
    </div>
  )
}

export default BannerTitleLevel
