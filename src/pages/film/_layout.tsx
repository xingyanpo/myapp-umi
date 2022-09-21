import React from 'react'
import { Redirect,useLocation } from 'umi'

export default function Film(props:any) {
  const location = useLocation()
  if(location.pathname === '/film') {
    return <Redirect to='/film/nowplaying'/>
  }
  return (
    <div>Film
     {props.children} 
    </div>
  )
}
