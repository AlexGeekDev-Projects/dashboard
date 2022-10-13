import { db, auth } from "../databases/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useAdminContext } from "../context/adminContext";
import { useUiContext } from "../context/uiContext";

const useLogin = () => {
  const { setAdminDb } = useAdminContext();
  const { setActive } = useUiContext();

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        const userRef = doc(db, "admins", email);
        const userFirestore = await getDoc(userRef);
        if (userFirestore.exists()) {
          const logins = await userFirestore.data().logins;
          const role = await userFirestore.data().role;
          if (role === "User") {
            signOut(auth)
              .then(() => {
                setAdminDb();
                setActive(false);
              })
              .catch((error) => {
                console.log(error.message);
              });
            Swal.fire("Lo sentimos", "Tu usuario no esta autorizado para ingresar", "error");
            return;
          }
          await updateDoc(userRef, {
            lastLogin: new Date().getTime(),
            logins: logins + 1,
          });
          Swal.fire("Bienvenido a Ganga Hoteles", "Ahora puedes navegar como administrador", "success");
        }
      })
      .catch((error) => {
        Swal.fire("Error", `${error.message}`, "error");
      });
  };

  return { login };
};

export default useLogin;
