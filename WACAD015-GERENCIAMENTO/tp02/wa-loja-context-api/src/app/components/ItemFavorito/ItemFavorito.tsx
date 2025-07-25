// ItemFavorito.tsx
import { Produto } from '@/app/types/produto';
import { useFavoritos } from '../../contexts/FavoritosContext';

interface ItemFavoritoProps {
  itemFavorito: Produto;
}

export default function ItemFavorito({ itemFavorito }: ItemFavoritoProps) {
  const { setFavoritos } = useFavoritos();

  const removerFavorito = () => {
    setFavoritos((favoritos) => {
      const novosFavoritos = favoritos.filter((produto) => produto.id !== itemFavorito.id);
      localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
      return novosFavoritos;
    });
  };

  return (
    <tr>
      <td>{itemFavorito.nome}</td>
      <td>R$ {itemFavorito.preco}</td>
      <td>{itemFavorito.desconto}%</td>
      <td>
        <button onClick={removerFavorito}>Remover</button>
      </td>
    </tr>
  );
}