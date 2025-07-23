import React from "react";

interface ItemFavoritoProps {
    produto: {
        id: string;         
        nome: string;      
        preco: string;      
    };
}

const ItemFavorito: React.FC<ItemFavoritoProps> = ({ produto }) => {
    return (
        <tr>
            <td className="col">{produto.nome}</td>
            <td className="col">R$ {produto.preco}</td>
            <td className="col">
                <button 
                className="btn btn-danger btn-sm" 
                >
                    Remover
                </button>
            </td>
        </tr>
    );
};

export default ItemFavorito;