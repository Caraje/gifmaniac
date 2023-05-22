
const GIPHY_KEY = import.meta.env.VITE_APY_KEY_GIPHY

export const getGifs = async (title) => {
  const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${title}&limit=100&api_key=${GIPHY_KEY}`)
  const { data } = await res.json()
  const gifList = data.map(gif => {
    return {
      id: gif.id,
      url: gif.images?.original.url
    }
  })

  return gifList.sort((a, b) => 0.5 - Math.random())
}
