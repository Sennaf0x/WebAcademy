import React from "react";

interface ItemProps {
    item: {
        id: string;         
        nome: string;      
        quantidade: number; 
        preco: number;      
    };
    removerItem: (id: string) => void;
}

const ItemCarrinho: React.FC<ItemProps> = ({ item, removerItem }) => {
    return (
        <tr>
            <td className="col">{item.nome}</td>
            <td className="col">{item.preco.toFixed(2)}</td>
            <td className="col">{item.quantidade}</td>
            <td className="col">{(item.preco * item.quantidade).toFixed(2)}</td>
            <td className="col">
                <button 
                    className="btn btn-danger btn-sm" 
                    onClick={() => removerItem(item.id)}
                >
                    Remover
                </button>
            </td>
        </tr>
    );
};

export default ItemCarrinho;