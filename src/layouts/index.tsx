import React from 'react'
import { NavLink } from 'umi'
import './index.less'

export default function index(props:any) {
  return (
    <div>index
      {props.children}
      <div>
        <div><NavLink activeClassName='active' to={'/film'}>film</NavLink></div>
        <div><NavLink activeClassName='active' to={'/cinema'}>cinema</NavLink></div>
        <div><NavLink activeClassName='active' to={'/center'}>center</NavLink></div>
      </div>
    </div>
  )
}
