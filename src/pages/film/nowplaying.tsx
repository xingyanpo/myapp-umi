import React, { useEffect, useState } from 'react'
import { useHistory } from 'umi'

export default function Nowplaying(props:any) {
  const history = useHistory()
  // console.log(history)  // 另一种方法获取路由跳转方法
  const [list,setList] = useState([])
  useEffect(() => {
    fetch('https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5457311', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16597710112470525318201345"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => res.json()).then(res => {
      setList(res.data.films)
    })
  }, [])
  return (
    <div>
      {
        list.map((item:any)=>
        <li key={item.filmId} onClick={() => {
          props.history.push(`/detail/${item.filmId}`)
        }}>{item.name}</li>
        )
      }
    </div>
  )
}
