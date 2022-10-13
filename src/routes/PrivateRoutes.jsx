import { Navigate } from "react-router-dom";
import { useAdminContext } from "../context/adminContext";

export const Super = ({ children }) => {
  const { adminDb } = useAdminContext();
  return adminDb.role === "SuperAdmin" ? children : <Navigate to="/" />;
};
