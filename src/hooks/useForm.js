import { useState } from "react";
import { useImgTreat } from "./useImgTreat";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const { dataURIToBlob, handleImage, resizeImgProfile } = useImgTreat();

  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
      [target.onSelect]: target.value,
    });
  };

  const handleAddImage = async (image) => {
    const { imageSelected, url, error } = handleImage(image);
    if (error) return;
    const newFile = await resizeImgProfile(imageSelected);
    const resize = dataURIToBlob(newFile);
    setValues({
      ...values,
      photo: imageSelected,
      thumbnail: resize,
      url,
    });
  };

  const handleAddMultipleImgs = async (image) => {
    const { imageSelected, url, error } = handleImage(image);
    if (error) return;
    const newFile = await resizeImgProfile(imageSelected);
    const resize = dataURIToBlob(newFile);
    setUrls([...urls, url]);
    setImages([...images, { thumbnail: resize, image: imageSelected }]);
    setValues({
      ...values,
      images: [...images, { thumbnail: resize, image: imageSelected }],
    });
  };

  const handleDirectValue = (value, name) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCheckBox = (e, name) => {
    setValues({
      ...values,
      [name]: e.target.checked,
    });
  };

  const handleSelect = (e, name) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  return {
    ...values,
    handleAddImage,
    handleAddMultipleImgs,
    handleDirectValue,
    handleInputChange,
    handleCheckBox,
    handleSelect,
    reset,
    urls,
    values,
  };
};

export default useForm;
