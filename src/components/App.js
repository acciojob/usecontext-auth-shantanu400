
import React,{useState} from "react";
import './../styles/App.css';
import { Authcontext } from "./Contextcomp";
import Authenticate from "./Authenticate";

const App = () => {
  const [auth,setauth]=useState(false)
  const authText="you are now authenticated, you can proceed";
  return (
    <>
     <Authcontext.Provider value={{auth,setauth,authText}} >
      <h1>Click on the checkbox to get authenticated</h1>
      <Authenticate/>
     


</Authcontext.Provider>
    
    </>
   
   
  )
}

export default App
