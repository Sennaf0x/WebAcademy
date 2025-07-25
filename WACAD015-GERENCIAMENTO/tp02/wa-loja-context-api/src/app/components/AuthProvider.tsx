import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface AuthContextType {
  email: string | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setEmail(storedUser);
    }
  }, []);

  const login = (email: string) => {
    setEmail(email);
    localStorage.setItem("user", email);
    window.location.href = "/"; // Redirecionar para a página inicial
  };

  const logout = () => {
    setEmail(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};