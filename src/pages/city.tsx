import React, { useEffect, useState } from 'react'
import { IndexBar, List } from 'antd-mobile'
import { connect } from 'umi'

function City(props:any) {
  const changeCity = (item:any)=>{
    props.dispatch({
      type: 'city/changeCity',
      payload: {
        cityName: item.name,
        cityId: item.cityId
      }
    })
    props.history.goBack()
  }
  const [city, setCity] = useState([])
  const filterCity: any = (cities: any) => {
    // console.log(cities)
    // 方法：生成26个字母
    const letterArr: Array<String> = []
    for (var i = 65; i < 91; i++) {
      letterArr.push(String.fromCharCode(i))
    }

    const newCities = []
    for (var m in letterArr) {
      var cityitems = cities.filter((item: any) => item.pinyin.substring(0, 1).toUpperCase() === letterArr[m])
      cityitems.length && newCities.push({
        title: letterArr[m],
        items: cityitems
      })
    }
    return newCities
  }
  useEffect(() => {
    fetch('https://m.maizuo.com/gateway?k=7486930', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16597710112470525318201345"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => res.json())
      .then(res => {
        setCity(filterCity(res.data.cities))
      })
  }, [])
  return (
    <div style={{ height: window.innerHeight }}>
      <IndexBar>
        {city.map((group: any) => {
          const { title, items } = group
          return (
            <IndexBar.Panel
              index={title}
              title={title}
              key={title}
            >
              <List>
                {items.map((item: any, index: number) => (
                  <List.Item key={index} onClick={()=> changeCity(item)}>{item.name}</List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
    </div>
  )
}

export default connect()(City) 