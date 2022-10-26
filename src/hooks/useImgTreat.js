import Resizer from "react-image-file-resizer";

export const useImgTreat = () => {
  const resizeImgProfile = (file) =>
    new Promise((resolve) => {
      if (file.type !== "image/gif") {
        Resizer.imageFileResizer(
          file,
          180,
          180,
          "WEBP",
          100,
          0,
          (uri) => {
            resolve(uri);
          },
          "base64",
          100,
          100
        );
      } else {
        resolve(file);
      }
    });

  const dataURIToBlob = (dataURI) => {
    if (dataURI.type !== "image/gif") {
      const splitDataURI = dataURI.split(",");
      const byteString = splitDataURI[0].indexOf("base64") >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
      const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
      const ia = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
      return new Blob([ia], { type: mimeString });
    } else {
      return dataURI;
    }
  };

  const handleImage = (image) => {
    const imageSelected = image.target.files[0];
    if (imageSelected === undefined) {
      console.log("no se seleccionó imagen");
      return;
    }
    if (
      imageSelected.type === "image/jpeg" ||
      imageSelected.type === "image/jpg" ||
      imageSelected.type === "image/png" ||
      imageSelected.type === "image/bmp" ||
      imageSelected.type === "image/gif" ||
      imageSelected.type === "image/webp"
    ) {
      const url = URL.createObjectURL(imageSelected);
      return { imageSelected, url };
    } else {
      console.log("type of image invalid");
      return { error: "type of image invalid" };
    }
  };
  return { dataURIToBlob, resizeImgProfile, handleImage };
};
