import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext'

const ProtectedRoute = function(route) {
    const { user } = useAppContext();
    console.log(user);
    if (!user) {
        return <Navigate to ='/' />
    }
    return route.children;
}

export default ProtectedRoute