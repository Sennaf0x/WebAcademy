
import React from "react";
import CardProduto from "../CardProduto/CardProduto";

const produtos = [
    { id: 1, nome: "Notebook 1", preco: 1500, imagem: "/placeholder.png" },
    { id: 2, nome: "Notebook 2", preco: 1500, imagem: "/placeholder.png" },
    { id: 3, nome: "Notebook 3", preco: 1500, imagem: "/placeholder.png" },
    { id: 4, nome: "Notebook 4", preco: 1500, imagem: "/placeholder.png" },
];

const ListagemProdutos: React.FC = () => {
    return (
        <>
            <h5 className="mb-3">Produtos disponíveis:</h5>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                {produtos.map((produto) => (
                    <div className="col" key={produto.id}>
                        <CardProduto produto={produto} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ListagemProdutos;