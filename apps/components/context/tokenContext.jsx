import React, {
  Children,
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export const TokenContext = createContext(null);
// eslint-disable-next-line react/prop-types
export const TokenProvider = ({children}) => {
  const [token, setToken] = useState({token: ''});
  return (
    <TokenContext.Provider value={{token, setToken}}>
      {children}
    </TokenContext.Provider>
  );
};

const useTokenContext = () => {
  const context = useContext(TokenContext);

  if (!context) {
    throw new Error('useToken must be used within a TokenContext');
  }

  return context;
};

export const useToken = () => {
  const {token, setToken} = useTokenContext();

  return {
    token,
    setToken,
  };
};
