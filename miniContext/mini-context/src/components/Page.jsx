import React,{useContext} from 'react'
import userContext from '../context/userContext'
const Page = () => {

    const {user}=useContext(userContext)
    if(!user.name || !user.email ||!user.age ||!user.password){
        return <div>Please sign up with correct details.</div>
    }else{
        return <div>Welcome {user.name}</div>
    }
}

export default Page
