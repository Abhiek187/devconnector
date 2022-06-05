import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Redirect to the login screen if the user needs to be authenticated
const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
}) => (!isAuthenticated && !loading ? <Navigate to="/login" /> : <Component />);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  component: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
