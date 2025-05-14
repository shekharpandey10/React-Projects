import React,{useContext} from 'react'
import userContext from '../context/userContext'
function Profile() {
    const {user}=useContext(userContext)
  
        if(!user) return <div>Please logIn...</div>
        else return <div>Welcome {user.username}</div>
}

export default Profile
