import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Produto } from '../types/produto';
import { FavoritosContextType } from '../types/favoritos.ContextType';

export const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

export const FavoritosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  useEffect(() => {
    const favoritosLocalStorage = localStorage.getItem("favoritos");

    if (favoritosLocalStorage) {
      try {
      const parsedFavoritos = JSON.parse(favoritosLocalStorage);
      setFavoritos(parsedFavoritos);
    } catch (error) {
      console.error("Erro ao analisar favoritos:", error);
      // Trate o erro apropriadamente, como redefinindo favoritos, se necessário
    }
  }
}, []);

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

export const useProdutoFavorito = (id: string) => {
  const { favoritos } = useFavoritos();
  const produtoFavorito = favoritos.some((item) => item.id === id);
  return produtoFavorito
}