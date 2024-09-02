import React, { createContext, useState } from "react";

export const PageContext = createContext({
  isAuthUser: false,
  changeUserAuthStatus: () => {},
});


const PageContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(false);

  const contextValue = { isAuthUser: authUser, changeUserAuthStatus: setAuthUser };
  return <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>;
};

export default PageContextProvider;
