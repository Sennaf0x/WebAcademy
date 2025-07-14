
import React from "react";

import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";

import { mockProdutos } from "./mocks/produtos";
import { mockItensCarrinho } from "./mocks/itensCarrinho"; 

const Home: React.FC = () => {
  
    const quantidadeTotal = mockItensCarrinho.reduce((total, item) => total + item.quantidade, 0);
    const valorTotal = mockItensCarrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);

    return (
        <main>
            <div className="container p-5">
                <ResumoCarrinho quantidadeTotal={quantidadeTotal} valorTotal={valorTotal} />
            </div>
            <div className="container p-5">
                <ListagemProdutos produtos={mockProdutos} />
            </div>
        </main>
    );
};

export default Home;