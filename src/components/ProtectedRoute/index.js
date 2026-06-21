import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'

const ProtectedRoute=({child})=>{
    const token=Cookies.get('jwt_token')

    if(token===undefined){
        return <Navigate to='/login'/>

    }

    return child
}

export default ProtectedRoute