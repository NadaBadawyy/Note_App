import { propsDataType } from '../lib/Types'
import { Navigate } from 'react-router-dom'

export default function InverseRoutes({children}:propsDataType) {
  if(localStorage.getItem('token')){
    return <Navigate to={'/'}/>
  }
  else{
    return children
  }
}
