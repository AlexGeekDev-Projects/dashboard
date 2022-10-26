import { createContext, useState, useContext } from "react";

export const UiContext = createContext();

export const UiProvider = (props) => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const defaultContext = {
    active,
    setActive,
    setLoading,
    loading,
    formData,
    setFormData,
  };

  return <UiContext.Provider value={defaultContext}>{props.children}</UiContext.Provider>;
};

export const useUiContext = () => {
  return useContext(UiContext);
};

export default UiProvider;
