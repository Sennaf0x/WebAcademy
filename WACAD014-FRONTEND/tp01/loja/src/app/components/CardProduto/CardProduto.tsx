import React from "react";
import Image from "next/image";
import { Produto } from "../../types/produto";

interface ProdutoProps {
    produto: Produto; 
    adicionarAoCarrinho: (produto: Produto) => void;
}

const CardProduto: React.FC<ProdutoProps> = ({ produto, adicionarAoCarrinho }) => {
    const imagem = produto.fotos[0]?.src || "/placeholder.png";

    return (
        <div className="card shadow-sm h-100">
            <Image
                src={imagem}
                className="card-img-top"
                alt={produto.nome}
                width={300}
                height={320}
            />
            <div className="card-body bg-light">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text text-secondary">R$ {produto.preco}</p>
                <button
                    className="btn btn-dark d-block w-100"
                    type="button"
                    onClick={() => adicionarAoCarrinho(produto)}
                >
                    Adicionar no carrinho
                </button>
            </div>
        </div>
    );
};

export default CardProduto;