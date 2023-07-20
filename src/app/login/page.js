"use client"
import React from "react"
import "./login.css"
import {login} from  "../../../service/firebase/auth";

export default function Login() {
    
    const  [state,setState] = React.useState({ 
        email: "",
        password: ""
    });

    function onChange(event)  {
        const value = event.target.value;
        const name = event.target.name;
        setState({
            ...state,
            [name]: value
        })
    }

    function ologin(){
        //cons email = state.email;
        //cons password = state-password;
        const {email,password} = state;

        login(email, password);

    }

    return (
        <div classname="container">
            <input onChange={onChange} value= {state.email} placeholder="email"type="text" />
           
            <input value={state.password}placeholder="123456"  type="password" />
           
            <button>login</button>
        </div>
    )
}