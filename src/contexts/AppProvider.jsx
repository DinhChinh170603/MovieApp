import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [activeTrailer, setActiveTrailer] = useState(false);

  return (
    <AppContext.Provider
      value={{
        activeTrailer,
        setActiveTrailer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
