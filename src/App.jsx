import { useState } from 'react'
import SignupForm from './SignupForm/SignupForm';
import Subscribed from './Subscribed/Subscribed';
import './App.css'

function App() {
    const [ route, setRoute ] = useState("SignupForm");
    const [ email, setEmail ] = useState("");
    const [ isError, setIsError ] = useState(true);

    const emailInput = (e) => {
        setEmail(e.target.value)
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
            setIsError(false)
            setEmail("")
        } else {
            setIsError(true)
            onRouteChange("Subscribed");
        }
    }
  const onRouteChange = (route) => {
        setRoute(route)
  }
  return (
    <>
      { route === "Subscribed" 
      ? 
        <>
         <Subscribed 
         email={email}
         onRouteChange={onRouteChange}/>
        </>
      : 
        <>
         <SignupForm 
         email={email}
         emailInput={emailInput}
         onSubmit={onSubmit}
         onRouteChange={onRouteChange}
         isError={isError}
         />
        </>
      } 
    </>
  )
}

export default App
