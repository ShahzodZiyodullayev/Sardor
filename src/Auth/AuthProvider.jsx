import { useEffect } from "react";
import Loader from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { isUserLoggedIn } from "../reducers/userReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

const AuthProvider = ({ children }) => {
  const { isLoading, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isValidToken = (accessToken) => {
    if (!accessToken) {
      return false;
    }

    const decodedToken = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;
    // return true;
    return decodedToken.exp > currentTime;
  };

  useEffect(() => {
    (async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken && isValidToken(accessToken)) {
          dispatch(isUserLoggedIn(true));
          // navigate("/");
        } else {
          dispatch(isUserLoggedIn(false));
        }
      } catch (err) {
        dispatch(isUserLoggedIn(false));
      }
    })();
  }, [user, dispatch, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default AuthProvider;
