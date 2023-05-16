import { useEffect, useState } from 'react'
import { getGifs } from '../services/giphy'

export const useFetchGifs = (title) => {
  const [images, setImages] = useState({
    data: [],
    loading: true
  })
  useEffect(() => {
    getGifs(title)
      .then((imgs) => {
        setImages({
          data: imgs,
          loading: false
        })
      })
  }, [title])

  return images
}
