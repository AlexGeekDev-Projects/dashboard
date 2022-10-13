import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { db, storage } from "../databases/firebase";
import Swal from "sweetalert2";

const useUploadImage = () => {
  const [percent, setPercent] = useState();
  const [state, setState] = useState();

  const uploadImage = (path, image, nameDb, email) => {
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(Math.trunc(progress));
        switch (snapshot.state) {
          case "paused":
            setState("Upload is paused");
            break;
          case "running":
            setState("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        Swal.fire("Error!", `${error}`, "error");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const userRef = doc(db, nameDb, email);
          await updateDoc(userRef, {
            photo: downloadURL,
          });
        });
      }
    );
  };
  return { uploadImage, percent, state };
};

export default useUploadImage;
