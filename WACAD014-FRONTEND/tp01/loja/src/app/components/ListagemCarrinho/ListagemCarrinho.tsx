// components/ListagemCarrinho.tsx
import React from "react";
import ItemCarrinho from "../ItemCarrinho/ItemCarrinho";

const ListagemCarrinho: React.FC = () => {
    const itensCarrinho = [
        { id: 1, nome: "Notebook 1", quantidade: 2, preco: 1500 },
        { id: 2, nome: "Notebook 2", quantidade: 1, preco: 1500 },
    ];

    return (
        <div>
            {itensCarrinho.map((item) => (
                <ItemCarrinho key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ListagemCarrinho;