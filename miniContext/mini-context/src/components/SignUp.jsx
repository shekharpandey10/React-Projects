import React,{useContext, useState} from 'react'
import userContext from '../context/userContext'

const SignUp = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [age,setAge]=useState(null)
    const [password,setpassword]=useState('')

    const {setUser}=useContext(userContext)

    const buttonClick=(e)=>{
        e.preventDefault()
        setUser({name,email,age,password})
        setName('')
        setEmail('')
        setAge('')
        setpassword('')
    }
  return (
    <div>
      <input type="text" placeholder='Enter your name'
      value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <input type="text" placeholder='Enter your email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <input type="text" placeholder='Enter your age'
      value={age}
      onChange={(e)=>setAge(e.target.value)}
      />
      <input type="text" placeholder='Enter your password'
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      />
      <button onClick={buttonClick}>SignUp</button>
    </div>
  )
}

export default SignUp
