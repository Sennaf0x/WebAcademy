import React from "react";

interface ItemProps {
    item: {
        nome: string;      // Nome do item
        quantidade: number; // Quantidade do item
        preco: number;      // Preço do item
    };
}

const ItemCarrinho: React.FC<ItemProps> = ({ item }) => {
    return (
        <tr >
            <td className="col">{item.nome}</td>
            <td className="col">{item.preco.toFixed(2)}</td>
            <td className="col">{item.quantidade}</td>
            <td className="col">{(item.preco * item.quantidade).toFixed(2)}</td>
            <td className="col">
                <button className="btn btn-danger btn-sm">Remover</button>
            </td>
        </tr>
    );
};

export default ItemCarrinho;