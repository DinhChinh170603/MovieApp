import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

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

AppProvider.propsTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
