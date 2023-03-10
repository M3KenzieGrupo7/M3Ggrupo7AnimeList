import { Navigate, Outlet } from 'react-router-dom';
import { IUser, IUser2 } from '../../providers/UserContext/types';

export const ProtectedRoutes = () => {
  const user: IUser2 | null = JSON.parse(localStorage.getItem('GeekAnimes:@user') || "null");
  console.log(user)
  
  return user ? <Outlet /> : <Navigate to='/' />

}