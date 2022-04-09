import { React } from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
function Navbar(){
    return <div>
        <div className='row nav'>
            <div className='col-md-6'>
                <h1>FaceBook</h1>
            </div>

            <div className='col-md-6'>
                <input type='text' placeholder='Username' />
                <input type='Password' placeholder='Password'/>
                <button>Login</button>
            </div>

        </div>
    </div>
}
export default Navbar
