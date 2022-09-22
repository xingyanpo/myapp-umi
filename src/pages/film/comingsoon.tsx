import React, { useEffect } from 'react'

export default function Comingsoon() {
  useEffect(() => {
    fetch('/api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%8A%E6%B5%B7&ci=10&channelId=4')
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
  })
  return (
    <div>Comingsoon</div>
  )
}
