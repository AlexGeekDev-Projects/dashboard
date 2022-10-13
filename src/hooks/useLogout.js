import { signOut } from "firebase/auth";
import { auth } from "../databases/firebase";
import Swal from "sweetalert2";
import { useAdminContext } from "../context/adminContext";
import { useUiContext } from "../context/uiContext";

const useLogout = () => {
  const { setAdminDb } = useAdminContext();
  const { setActive } = useUiContext();
  const logout = () => {
    signOut(auth)
      .then(() => {
        setAdminDb();
        setActive(false);
        Swal.fire("Hasta luego", "Esperamos regreses pronto", "success");
      })
      .catch((error) => {
        Swal.fire("Error", `${error.message}`, "error");
      });
  };
  return { logout };
};

export default useLogout;
