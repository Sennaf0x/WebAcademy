
import React from "react";
import CardProduto from "../CardProduto/CardProduto";
import { useListaProdutos } from "@/app/hooks/useListaProdutos";
import { IListagemProdutos } from "@/app/types/IListagemProdutos";


export default function ListagemProdutos({
    produtos,
    adicionarAoCarrinho,
}: IListagemProdutos) {
    
    const { isPending, isError } = useListaProdutos();
    
    if (isPending) return <h5>Carregando...</h5>; 
    
    if (isError) return <h5>Carregando...</h5>; 
    
    if (!produtos || !Array.isArray(produtos)) return <h5>Não há produtos disponíveis no momento</h5>; 

    return (
        <>
        <h5 className="mb-3">Produtos disponíveis:</h5>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
            {produtos.map((produto) => (
                <div className="col" key={produto.id}>
                    <CardProduto 
                        produto={produto} 
                        adicionarAoCarrinho={adicionarAoCarrinho} 
                    />
                </div>
                ))}
        </div>
        </>
        );
}
