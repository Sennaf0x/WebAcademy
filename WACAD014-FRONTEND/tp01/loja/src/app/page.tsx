"use client";

import React, { useState } from "react";

import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import { mockProdutos } from "./mocks/produtos";
import { mockItensCarrinho } from "./mocks/itensCarrinho"; 
import { Produto } from "./types/produto";

const Home: React.FC = () => {
    const [quantidadeTotal, setQuantidadeTotal] = useState<number>(mockItensCarrinho.reduce((total, item) => total + item.quantidade, 0));
    const [valorTotal, setValorTotal] = useState<number>(mockItensCarrinho.reduce((total, item) => total + item.preco * item.quantidade, 0));

    const adicionarAoCarrinho = (produto: Produto) => {
        setQuantidadeTotal(prevQuantity => prevQuantity + 1);
        setValorTotal(prevTotal => prevTotal + parseFloat(produto.preco));
    };

    return (
        <main>
            <div className="container p-5">
                <ResumoCarrinho quantidadeTotal={quantidadeTotal} valorTotal={valorTotal} />
                <ListagemProdutos produtos={mockProdutos} adicionarAoCarrinho={adicionarAoCarrinho} />
            </div>
        </main>
    );
};

export default Home;