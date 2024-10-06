
import './App.css'
import { useUser } from '@clerk/clerk-react'
import { Navigate, Outlet } from 'react-router-dom'

function App() {  
  // eslint-disable-next-line no-unused-vars
  const {user,isLoaded,isSignedIn}=useUser();

  if(!isSignedIn&&isLoaded)
  {
    return <Navigate to={'/auth/sign-in'} />
  }



  return (
    
    <>
  <header/>
   <Outlet/>
    
  </>
    
  )
}

export default App
