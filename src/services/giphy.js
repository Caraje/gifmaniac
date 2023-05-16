export const getGifs = async (title) => {
  const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${title}&limit=100&api_key=PkAyZJEOlm1sq4UdOtl0doCklSwGOELe`)
  const { data } = await res.json()
  const gifList = data.map(gif => {
    return {
      id: gif.id,
      url: gif.images?.original.url
    }
  })
  return gifList
}
