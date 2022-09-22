import React from 'react'
import { NavLink, useHistory } from 'umi'
import './index.less'

export default function index(props:any) {
  const history = useHistory()
  if(history.location.pathname === '/city' || history.location.pathname.includes('/detail')) {
    return <div>
      {props.children}
    </div>
  }
  return (
    <div>
      {props.children}
      <div className='bottom-bar'>
        <div><NavLink activeClassName='active' to={'/film'}>film</NavLink></div>
        <div><NavLink activeClassName='active' to={'/cinema'}>cinema</NavLink></div>
        <div><NavLink activeClassName='active' to={'/center'}>center</NavLink></div>
      </div>
    </div>
  )
}
