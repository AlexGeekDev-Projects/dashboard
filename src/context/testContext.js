import { useContext, createContext, useState } from "react";

export const TestContext = createContext();

export const TestProvider = (props) => {
  const [first, setfirst] = useState(second);

  const defaultContext = {
    first,
    setfirst,
  };

  return <TestContext.Provider value={defaultContext}> {props.children} </TestContext.Provider>;
};

export const useTestContext = () => {
  return useContext(TestContext);
};

export default TestProvider;
