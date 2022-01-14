import { useSelector } from "react-redux";
import {
  Route,
  useNavigate,
  Navigate,
  PathRouteProps,
  LayoutRouteProps,
  IndexRouteProps,
} from "react-router-dom";
import { selectIsLoggedin } from "../features/auth/authSlice";

export const ProtectedRoute = (
  _props: PathRouteProps | LayoutRouteProps | IndexRouteProps
) => {
  const isLoggedin = useSelector(selectIsLoggedin);

  const elem = isLoggedin ? _props.element : <Navigate to="/auth/login" />;

  return <Route {..._props} element={elem} />;
};
