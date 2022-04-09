import { React } from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
import { useState } from 'react';
function Navbar(){

    //login page logic
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')

    function login(){
        var users=JSON.parse(localStorage.getItem('users'))  //everyting stored in users array

        var i=0;
        for(var user of users){
            if(user.username==username && user.password==password)
            {
                i++;
            }
        }
        if(i==1){
            alert("Login is Successful")
        }else{
            alert("Invalid login")
        }
    }
    return <div>
        <div className='row nav'>
            <div className='col-md-6'>
                <h1>FaceBook</h1>
            </div>

            <div className='col-md-6'>
                <input type='text' placeholder='Username' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                <input type='Password' placeholder='Password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                <button onClick={login}>Login</button>
            </div>

        </div>
    </div>
}
export default Navbar
