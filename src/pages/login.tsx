import React, {useEffect, useState} from 'react'
import { useHistory } from 'umi'

export default function Login() {
  const history = useHistory()
  
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    fetch('/users').then(res=>res.json())
    .then(res=> {
      console.log(res)
    })
  }, [])
  return (
    <div>
      <input type='text' onChange={(evt) => setName(evt.target.value)}/>
      <input type='password' onChange={(evt) => setPassword(evt.target.value)}/>
      {/* {name} - {password} */}
      <button onClick={() => {
        fetch('/users/login', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body:JSON.stringify({
            name,
            password
          })
        }).then(res=>res.json())
        .then(res=> {
          console.log(res)
          if(res.ok) {
            localStorage.setItem('token', name)
            history.push(`/center`)
          }else{
            alert('用户名密码不匹配')
          }
        })
      }}>登录</button>

    </div>
  )
}
