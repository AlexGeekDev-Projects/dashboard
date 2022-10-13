import { createContext, useState, useContext } from "react";

export const AdminContext = createContext();

export const AdminProvider = (props) => {
  const [adminDb, setAdminDb] = useState();

  const defaultContext = {
    adminDb,
    setAdminDb,
  };

  return (
    <AdminContext.Provider value={defaultContext}>
      {props.children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};

export default AdminProvider;
