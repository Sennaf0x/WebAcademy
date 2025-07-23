import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Produto } from '../types/produto';
import { FavoritosContextType } from '../types/favoritos.ContextType';

export const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

export const FavoritosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error("useFavoritos deve ser utilizado com o FavoritosProvider");
  }
  return context;
};