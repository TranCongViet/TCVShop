import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    // Chờ dữ liệu user load xong, có thể show spinner
    return <div>Loading...</div>;
  }

  return <div>{isSignedIn ? children : <Navigate to="/" />}</div>;
};

export default ProtectedRoute;
