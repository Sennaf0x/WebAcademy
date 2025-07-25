import { useDeleteFavorito } from "@/app/hooks/useFavoritos";
import { Produto } from "@/app/types/produto";
import React from "react";

interface ItemFavoritoProps {
    produto: Produto;
    refetchFavoritos: () => void;
}

const ItemFavorito: React.FC<ItemFavoritoProps> = ({ produto, refetchFavoritos }) => {
    
    const deleteMutation = useDeleteFavorito(refetchFavoritos);

    const handleDelete = () => {
        deleteMutation.mutate(produto.id);
    };
    return (
        <tr>
            <td className="col">{produto.nome}</td>
            <td className="col">R$ {produto.preco}</td>
            <td className="col">
                <button 
                className="btn btn-danger btn-sm"
                onClick={handleDelete}
                >
                    Remover
                </button>
            </td>
        </tr>
    );
};

export default ItemFavorito;