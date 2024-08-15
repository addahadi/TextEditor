import './App.css'
import SignIn from '../app/signup'
import {Router , Route , Routes, useNavigate } from 'react-router-dom'
import { app ,database, provider , auth  } from './utils/firebase-config'
import { useEffect, useState } from 'react'
import {  getAuth } from 'firebase/auth/web-extension'
import {  signInWithPopup } from 'firebase/auth'

import Dashboard from '../app/dashboard'
import { GoogleAuthProvider } from 'firebase/auth/cordova'
import Document from '../app/Document'
function App() {
  
  const [currentuser , setCurrentuser] = useState()
  const navigate = useNavigate()
  const handleSignIn = async () => {

    try {
      signInWithPopup(auth,provider).then(()=>{
        navigate("/")
      }); 
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);    
  };
}

  useEffect(()=>{
    const unsb = auth.onAuthStateChanged((user)=>{
      setCurrentuser(user)
    })
    return () => unsb()
  },[auth])
  return (
    <Routes>
      <Route path='/' element={<Dashboard User = {currentuser}/>} />
      <Route path="/signin" element = {<SignIn signin={handleSignIn}/>}/>
      <Route path="/doc/:id" element = {<Document User = {currentuser} />} />
    </Routes>
  )


}

export default App
