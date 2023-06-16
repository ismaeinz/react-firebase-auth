import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

function ReqAuthContext({ children }) {
  const { currentUser } = useAuthContext();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
}

export default ReqAuthContext;
