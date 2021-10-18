import React, { createContext, useState } from 'react';

// Criação do AppContext
const AppContext = createContext();

// Criação do Provider
const Provider = ({ children }) => {
  const [pageIndex, setPageIndex] = useState(null);
  return (
    <AppContext.Provider value={ { pageIndex, setPageIndex } }>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
const useGlobalState = () => React.useContext(AppContext);

export { Provider };
export { useGlobalState };
