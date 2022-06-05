import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Spinner from "../layout/Spinner";

const PrivateRoute = ({ component: Component }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  // Redirect to the login screen if the user needs to be authenticated
  return loading ? (
    <Spinner />
  ) : isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to="/login" />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
