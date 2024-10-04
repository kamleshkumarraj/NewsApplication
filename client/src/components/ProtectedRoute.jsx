import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getSelf } from '../store/slices/selfHandler.slice'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const user = useSelector(getSelf)
    const navigate = useNavigate();
    let status = 'unauthenticated'
    if(user?.firstname) status = 'authenticated' 
    useEffect(() => {
        if(status == 'unauthenticated') navigate('/login')
    },[])
  return (
    <div>
        {
            status == 'authenticated' ? children : ''
        }
    </div>
  )
}

export default ProtectedRoute
