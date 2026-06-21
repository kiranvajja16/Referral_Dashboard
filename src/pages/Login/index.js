import {useState} from 'react'
import {Navigate,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login =()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const navigate=useNavigate()

    const jwtToken=Cookies.get('jwt_token')

    if(jwtToken!==undefined){
        return <Navigate to='/' />
    }

    const onSubmitForm = async event =>{
        event.preventDefault()
        const userDetails={
            email,password
        }
        const url =
      'https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin'
        const options={
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(userDetails),
        }

        const response=await fetch(url,options)

        const data =  await response.json()
        
        if(response.ok){
            Cookies.set("jwt_token",data.data.token,{expires:30,})
            navigate('/')
        }
        else{
            setError(data.message)
        }
    }

    return(
        <div className="login-container">
            <div className="login-card">
                <h1 className="logo">Go Business</h1>
                <p className="login-description">
                    Sign in to open your referral dashboard
                </p>

                <form className="login-form" onSubmit={onSubmitForm}>
                    <div className="input-container">
                        <label htmlFor="email" className="label">
                            Email
                        </label>

                        <input 
                        id="email"
                        type="email"
                        placeholder="you@example.com" 
                        className="input" 
                        value={email} 
                        onChange={event=>setEmail(event.target.value)}
                        />
                    </div>
                     <div className="input-container">
                        <label htmlFor="password" className="label">
                            Password
                        </label>

                        <input 
                        id="password"
                        type="password"
                        className="input" 
                        value={password} 
                        onChange={event=>setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Sign In
                    </button>
                    {error !== '' &&(
                        <p className="error-message">
                            {error}
                        </p>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Login