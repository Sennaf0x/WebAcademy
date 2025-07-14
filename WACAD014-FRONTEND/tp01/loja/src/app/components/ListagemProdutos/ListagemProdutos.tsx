
import React from "react";
import CardProduto from "../CardProduto/CardProduto";
import { Produto } from "../../types/produto";

interface ListagemProdutosProps {
    produtos: Produto[];
    adicionarAoCarrinho: (produto: Produto) => void;
}

const ListagemProdutos: React.FC<ListagemProdutosProps> = ({ produtos, adicionarAoCarrinho }) => {
    return (
        <>
            <h5 className="mb-3">Produtos disponíveis:</h5>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                {produtos.map((produto) => (
                    <div className="col" key={produto.id}>
                        <CardProduto produto={produto} adicionarAoCarrinho={adicionarAoCarrinho} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ListagemProdutos;