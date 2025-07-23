import { Produto } from "./produto"

export interface FavoritosContextType {
  favoritos: Produto[];
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
}