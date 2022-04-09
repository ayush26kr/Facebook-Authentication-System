import React, { useState } from "react";
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Body(){

    const[name,setname]=useState('')
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')

    function registeruser(){
        alert("working")
    }

    return <div>
        <div className="row justify-content-center">

            <div className="col-md-6">
                
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook-image"/>
                <br/>
                <h2>Facebook helps you connect and share with the people in your life.</h2>

            </div>
            <div className="col-md-4">
                <h1>Register</h1>
                <form onSubmit={registeruser}>

                    <input type="text" placeholder="Name" className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                    <input type="text" placeholder="Password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

                    <input type="submit" className="btn btn-primary" values="SIGN UP"/>
                </form>

            </div>
        </div>
    </div>
}
export default Body