import { useEffect } from "react";
import useAuthChange from "./hooks/useAuthChange";
import { Path } from "./routes/Path";

export const App = () => {
  const { getAuth } = useAuthChange();
  useEffect(() => {
    getAuth();
  }, []);

  return <Path />;
};
