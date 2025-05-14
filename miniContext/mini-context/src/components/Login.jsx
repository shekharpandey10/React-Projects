import React,{useState,useContext} from 'react'
import userContext from '../context/userContext'

const Login = () => {
    const [username,setUserName]=useState('')
    const [pasword,setpassword]=useState('')
    const {setUser}=useContext(userContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,pasword})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" name="" id=""
      value={username}
      onChange={(e)=>{ setUserName(e.target.value)}}
      placeholder='username'/>
       {" "}
      <input type="password" name="" id="" 
       value={pasword}
      onChange={(e)=>{ setpassword(e.target.value)}}
      placeholder='password'/>
        {" "}
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
