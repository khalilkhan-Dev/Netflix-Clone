import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from  '../Context/AuthContext'
import './Navbar.css'

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
    <div className="navbar" >
      <div>
      <div className="section1">
        <p style={{textDecoration:'none'}} ><p className='netflix'>MOVIFLIX</p></p>
        
      </div>
      <div className="section2">


      {user?.email ? (
        <div>
          <button className='logout' onClick={handleLogout} > Logout </button>

        </div>
      ) :(
        <div>

        <Link to={'/'}> <button className="btn1">Sign In</button></Link>
        {/* <Link to={'/Signup'}> <button className="btn2">Sign Up</button></Link> */}
        </div>
      )}



      </div>
      </div>
      

    </div>
    
    </>
  )
}

export default Navbar