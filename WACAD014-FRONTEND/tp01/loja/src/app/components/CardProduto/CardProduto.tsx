import React from "react";
import Image from "next/image";
import { Produto } from "../../types/produto";
import { useFavoritos } from "@/app/hooks/useFavoritos";
import { useRouter } from "next/navigation";

interface ProdutoProps {
    produto: Produto; 
    adicionarAoCarrinho: (produto: Produto) => void;
}

const CardProduto: React.FC<ProdutoProps> = ({ produto, adicionarAoCarrinho }) => {
    const router = useRouter();
    const imagem = produto.fotos[0]?.src || "/placeholder.png";

    const { mutate: adicionarFavorito } = useFavoritos();

    const handleFavoritar = () => {
        adicionarFavorito(produto);
    };

    const verDetalhesProduto = (nomeProduto: string) => {
        router.push(`/produto/${nomeProduto}`);
    };

    return (
        <div className="card shadow-sm h-100">
            <Image
                src={imagem}
                className="card-img-top"
                alt={produto.nome}
                width={300}
                height={320}
                onClick={() => verDetalhesProduto(produto.id)}
                style={{ cursor: 'pointer' }}
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
                <button
                    className="btn btn-outline-danger d-block w-100 mt-2"
                    type="button"
                    onClick={handleFavoritar}
                >
                    Favoritar
                </button>
            </div>
        </div>
    );
};

export default CardProduto;