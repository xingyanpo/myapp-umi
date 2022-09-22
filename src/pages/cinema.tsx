import React, { useEffect } from 'react'
import { NavBar, Space, DotLoading } from 'antd-mobile'
import { SearchOutline, MoreOutline } from 'antd-mobile-icons'
import { connect } from 'umi'

function Cinema(props:any) {
  useEffect(()=>{
    if(props.list.length === 0) {
      props.dispatch({
        type: 'cinema/getList',
        payload: {
          cityId: props.cityId
        }
      })
    } else {
      console.log('缓存');
      
    }
  }, [])
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline />
      </Space>
    </div>
  )
  
  return (
    <div>
      <NavBar back={ props.cityName } backArrow={false} right={right} onBack={() => {
        props.dispatch({
          type: 'cinema/clearList'
        })
        props.history.push(`/city`)
      }}>
        标题
      </NavBar>
      {props.loading && <div style={{textAlign:'center'}}>
        <DotLoading />
      </div>}
      <div>
        {
          props.list.map((item:any)=>
            <li key={item.cinemaId}>{item.name}</li>
          )
        }
      </div>
    </div>
  )
}

export default connect((state: any) => {
  return {
    cityName: state.city.cityName,
    loading: state.loading.global,
    cityId: state.city.cityId,
    list: state.cinema.list
  }
})(Cinema)