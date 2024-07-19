
import React,{useState} from "react";
import './../styles/App.css';
import { Authcontext } from "./Contextcomp";
import Authenticate from "./Authenticate";

const App = () => {
  const [auth,setauth]=useState(false)
  return (
    <>
     <Authcontext.Provider value={{auth,setauth}} >
      <h1>Click on the checkbox to get authenticated</h1>
      <Authenticate/>
     


</Authcontext.Provider>
    
    </>
   
   
  )
}

export default App
