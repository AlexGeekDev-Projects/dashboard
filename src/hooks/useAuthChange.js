import { auth, db } from "../databases/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useAdminContext } from "../context/adminContext";
import { useUiContext } from "../context/uiContext";

const useAuthChange = () => {
  const { setAdminDb } = useAdminContext();
  const { setActive } = useUiContext();

  const getAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = doc(db, "admins", user.email);
        onSnapshot(userRef, async (doc) => {
          if (doc.exists()) {
            await setAdminDb(doc.data());
            await setActive(true);
          }
        });
      } else {
        // setActive(false);
      }
    });
  };

  return { getAuth };
};

export default useAuthChange;
