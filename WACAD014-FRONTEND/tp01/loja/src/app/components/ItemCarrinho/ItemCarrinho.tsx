import React from "react";

interface ItemProps {
    item: {
        nome: string;
        quantidade: number;
        preco: number;
    };
}

const ItemCarrinho: React.FC<ItemProps> = ({ item }) => {
    return (
        <div className="row card-body">
            <div className="col">{item.nome}</div>
            <div className="col">{item.preco.toFixed(2)}</div>
            <div className="col">{item.quantidade}</div>
            <div className="col">{(item.preco * item.quantidade).toFixed(2)}</div>
            <div className="col">
                <button className="btn btn-danger btn-sm">Remover</button>
            </div>
        </div>
    );
};

export default ItemCarrinho;