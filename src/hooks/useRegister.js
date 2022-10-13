import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../databases/firebase";
import useUploadImage from "./useUploadImage";
import Swal from "sweetalert2";
import { useUiContext } from "../context/uiContext";

const useRegister = () => {
  const { uploadImage, percent, state } = useUploadImage();
  const { setLoading } = useUiContext();

  const emailReg = async (values, path, nameDb) => {
    try {
      await setLoading(true);
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async ({ user }) => {
          const userRef = doc(db, nameDb, user.email);

          const data = {
            date: new Date().getTime(),
            email: user.email,
            isAnonymous: user.isAnonymous,
            lastLogin: new Date().getTime(),
            logins: 1,
            name: values.name,
            phone: values.phone,
            provider: "e-mail",
            role: "Admin",
            uid: user.uid,
            userName: values.userName,
            verified: user.emailVerified,
          };

          await setDoc(userRef, data).then(async () => {
            await sendEmailVerification(auth.currentUser)
              .then(async () => {
                await uploadImage(path, values.photo, nameDb, user.email);
                setLoading(false);
                Swal.fire("Excelente!", "Tu cuenta ha sido registrada revisa tu bandeja de entrada!", "success");
              })
              .catch(function (error) {
                Swal.fire("Error!", `${error}`, "error");
                setLoading(false);
              });
          });
        })
        .catch((error) => {
          Swal.fire("Error!", `${error}`, "error");
          setLoading(false);
        });
    } catch (error) {
      Swal.fire("Error!", `${error}`, "error");
      setLoading(false);
    }
  };

  return { emailReg };
};

export default useRegister;
