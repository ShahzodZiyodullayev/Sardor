import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuard = ({ children }) => {
  const authenticated = useSelector((state) => state.auth.loggedIn);
  const { pathname } = useLocation();

  return (
    <>
      {authenticated ? (
        children
      ) : (
        <Navigate replace to="/signin" state={{ from: pathname }} />
      )}
    </>
  );
};

export default AuthGuard;
