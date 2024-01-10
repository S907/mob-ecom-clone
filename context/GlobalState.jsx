import React, { useState } from 'react';
import AppContext from './AppContext';

const GlobalState = ({ children }) => {
  const [state1, setState1] = useState([]);
  const [state2, setState2] = useState([]);


  const contextValue = {
    state1,
    setState1,
    state2,
    setState2,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default GlobalState;
