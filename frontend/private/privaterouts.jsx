// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ children, allowedRoles }) => {
  const role = Cookies.get("role"); // Get role from cookie

  if (!role) return <Navigate to="/admin" />;
  if (!allowedRoles.includes(role)) return <Navigate to="/unauthorized" />;

  return children;
};

export default PrivateRoute;
