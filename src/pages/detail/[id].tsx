import React from 'react'
import {useParams} from 'umi'

export default function Detail(props:any) {
  const params = useParams()
  console.log(params)   // 另一种方法获取传入的值
  return (
    <div>Detail-{props.match.params.id}</div>
  )
}
