import React from 'react'
import { Redirect } from 'umi'

export default function Auth(props:any) {
  if(localStorage.getItem("token")) {
    return (
      <>
      {props.children}
      </>
    )
  }
  return <Redirect to={'/login'}/>
}
