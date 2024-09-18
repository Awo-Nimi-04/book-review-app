import React, { createContext, useState } from "react";
import { USER_INFO } from "../utilities/Data";

export const PageContext = createContext({
  isAuthUser: false,
  changeUserAuthStatus: () => {},
  allUsers: [],
  setAllUsers: () => {},
  currIdx: "",
  setCurrIdx: () => {},
});

const PageContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(false);
  const [allUsers, setAllUsers] = useState([...USER_INFO]);
  const [currIdx, setCurrIdx] = useState(7);

  const contextValue = {
    isAuthUser: authUser,
    changeUserAuthStatus: setAuthUser,
    allUsers: allUsers,
    setAllUsers: setAllUsers,
    currIdx: currIdx,
    setCurrIdx: setCurrIdx,
  };
  return (
    <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>
  );
};

export default PageContextProvider;
