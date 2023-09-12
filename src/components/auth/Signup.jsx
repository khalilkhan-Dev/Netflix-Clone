import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import './Signup.css'

const Signup = () => {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const {  signUp } = UserAuth();
  const [error, setError] = useState('')

  const navigate = useNavigate()


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      const store =  await signUp(email, password)
      navigate('/Account')
      
      console.log(store);
     
    } catch (error) {
      
      setError(error.message)
    }
  };

  return (
    <>
    <div className="signup">
        <div className="img">
        <img className='signupimg' src="https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/4f3f77f5-4cdb-4797-a6a3-5f4f89fec263/PK-en-20230220-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        </div>
        <div className="signup_form">
           <div className="sign_card">
           <h1 style={{marginLeft:'10%' }}>Sign Up </h1>
           {error ? <p style={{color:'red', marginLeft:'10%'}}>*write the corrcet email and password <br />  *password should be 6 characters</p> : null}
           
            <form onSubmit={handleSubmit}>
                <input style={{marginBottom:'4%', width:'80%', height:'30px' , marginLeft:'10%'}} value={email}  onChange={(e) => setEmail(e.target.value)} type="email" placeholder='enter your email' /> <br />
                <input style={{marginBottom:'6%', width:'80%', height:'30px' , marginLeft:'10%'}} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='enter your password' /><br />
                <button type="submit"  style={{backgroundColor:'red', color:'white', width:'80%', height:'40px', marginLeft:'10%'}}>Sign Up</button>
                <p style={{marginLeft:'10%', marginTop:'8%', color:'gray'}}>Already Register? <Link style={{color:'red', textDecoration:'none'}} to={'/'}>Sign-In Now</Link></p>

            </form>
           </div>
        </div>
    </div>
    </>
  )
}

export default Signup








// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import {  signInWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../../Firebase'
// import './Signin.css'

// const Signin = () => {
//   const [email, setEmail]= useState('')
//   const [password, setPassword]= useState('')
    
//   const SignIn = (e)=>{
//     e.preventDefault();
//     signInWithEmailAndPassword( auth, email, password )
//     .then((userCredential)=>{
//       console.log(userCredential);
//     }).catch((error)=>{
//       console.log(error);
//     })
//   }

//   return (
//     <>
//     <div className="signin">
//         <div className="img">
//         <img className='signinimg' src="https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/4f3f77f5-4cdb-4797-a6a3-5f4f89fec263/PK-en-20230220-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
//         </div>
//         <div className="signin_form">
//            <div className="sign_card">
//            <h1 style={{marginLeft:'15%' }}>Sign In </h1>
//             <form onSubmit={SignIn} >
//                 <input style={{marginBottom:'4%', width:'70%', height:'30px' , marginLeft:'15%'}} value={email}  onChange={(e) => setEmail(e.target.value)} type="email" placeholder='enter your email' /> <br />
//                 <input style={{marginBottom:'6%', width:'70%', height:'30px' , marginLeft:'15%'}} value={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder='enter your password' /><br />
//                 <button type="submit" style={{backgroundColor:'red', color:'white', width:'72%', height:'40px', marginLeft:'15%'}}>Sign In</button>
//                 <p style={{marginLeft:'15%', marginTop:'8%', color:'gray'}}>New to Netflix? <Link style={{color:'red', textDecoration:'none'}} to={'/Signup'}>Signup</Link></p> 
//             </form>
//            </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Signin