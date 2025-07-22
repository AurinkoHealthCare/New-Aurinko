// // src/components/PrivateRoute.jsx
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children, allowedRoles }) => {
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   if (!token) {
//     return <Navigate to="/" />;
//   }

//   if (!allowedRoles.includes(role)) {
//     return <Navigate to="/unauthorized" />;  // Show an Unauthorized page
//   }

//   return children;
// };

// export default PrivateRoute;


// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/" />;

  try {
    const decoded = jwtDecode(token);
    const userRole = decoded.role;

    return allowedRoles.includes(userRole) ? children : <Navigate to="/unauthorized" />;
  } catch (error) {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
