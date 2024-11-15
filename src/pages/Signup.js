import React from 'react'
import Header from '../components/header/Header'
import SignupSigninComponent from '../components/signinsignup/SingUpSignIn'
import Footer from '../components/header/Footer'

const Signup = () => {
  return (
    <div><Header/>
    <div className='wrapper'>
      <SignupSigninComponent/>
    </div>
    <Footer/>
    </div>

  )
}

export default Signup