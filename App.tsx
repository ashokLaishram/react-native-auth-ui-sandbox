import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  const login = async (email: string, password: string) => {
    // Placeholder for AWS Amplify Auth.signIn()
    setUser({ email });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
