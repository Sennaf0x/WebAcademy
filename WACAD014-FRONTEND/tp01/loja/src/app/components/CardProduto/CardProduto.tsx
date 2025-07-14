
import React from "react";
import Image from "next/image";

interface ProdutoProps {
    produto: {
        nome: string;
        preco: number;
        imagem: string;
    };
}

const CardProduto: React.FC<ProdutoProps> = ({ produto }) => {
    return (
        <div className="card shadow-sm h-100">
            <Image
                src={produto.imagem}
                className="card-img-top"
                alt="imagem placeholder"
                width={300}
                height={320}
            />
            <div className="card-body bg-light">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text text-secondary">R$ {produto.preco}</p>
                <button className="btn btn-dark d-block w-100" type="button">
                    Adicionar no carrinho
                </button>
            </div>
        </div>
    );
};

export default CardProduto;