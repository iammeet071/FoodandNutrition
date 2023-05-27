import React from 'react'
import '../CSS/Login.css'
import {auth,provider} from '../firebase'
const Login = (props) => {
    const signIn= ()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            const newUser={
                name:result.user.displayName,
                photo:result.user.photoURL,
            }
            localStorage.setItem('user',JSON.stringify(newUser));
            props.setUser(newUser);
            
        })
        .catch((err)=>{
            alert(err.message);
        })
    }
    return (
        <>
        <div class="cardContainer">
    <div class="login">
    <h2><i class="fas fa-utensils-alt"></i>  RT's Food Guide.</h2>
    <p> <button onClick={signIn} className="logout">Login With Google</button> </p>
    
    </div>
    </div>
        </>
    )
}

export default Login
