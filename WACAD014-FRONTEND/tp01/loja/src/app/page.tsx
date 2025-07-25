"use client";

import React, { useState } from "react";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import { mockItensCarrinho } from "./mocks/itensCarrinho"; 
import { Produto } from "./types/produto";
import { useListaProdutos } from "./hooks/useListaProdutos";

const Home: React.FC = () => {
    const { produtos, isPending, isError } = useListaProdutos();

    const [quantidadeTotal, setQuantidadeTotal] = useState<number>(mockItensCarrinho.reduce((total, item) => total + item.quantidade, 0));
    const [valorTotal, setValorTotal] = useState<number>(mockItensCarrinho.reduce((total, item) => total + item.preco * item.quantidade, 0));

    const adicionarAoCarrinho = (produto: Produto) => {
        setQuantidadeTotal(prevQuantity => prevQuantity + 1);
        setValorTotal(prevTotal => prevTotal + parseFloat(produto.preco));
    };

    if (isPending) return <h5>Carregando...</h5>; 
    if (isError) return <h5>Erro ao carregar produtos.</h5>; 
    if (!produtos || !Array.isArray(produtos)) return <h5>Não há produtos disponíveis no momento</h5>;

    return (
        <main>
            <div className="container p-5">
                <ResumoCarrinho quantidadeTotal={quantidadeTotal} valorTotal={valorTotal} />
                <ListagemProdutos produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho} />
            </div>
        </main>
    );
};

export default Home;