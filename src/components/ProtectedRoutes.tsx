import { propsDataType } from '../lib/Types'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutes({children}:propsDataType) {
  if(localStorage.getItem('token')){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
}
