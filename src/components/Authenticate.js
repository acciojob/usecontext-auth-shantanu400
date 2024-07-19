import React from 'react'
import { useContext } from 'react'
import { Authcontext } from './Contextcomp'

const Authenticate = () => {
    
    const {auth,setauth}=useContext(Authcontext);
    const handleauth=(e)=>{
      setauth(e.target.checked)
    }
  return (
  <>

{
    auth?
    <p>you are now authenticated, you can proceed</p>
    :
    <p>you are not authenticated</p>
    
}
<input type="checkbox" onChange={handleauth}></input>


  </>
  )
}

export default Authenticate