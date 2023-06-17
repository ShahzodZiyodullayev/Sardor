import { useEffect } from "react";
import Loader from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { isUserLoggedIn } from "../reducers/userReducer";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const { isLoading, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        if (user) {
          dispatch(isUserLoggedIn(true));
          navigate("/");
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
