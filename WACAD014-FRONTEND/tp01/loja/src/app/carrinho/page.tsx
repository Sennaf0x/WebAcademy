"use client";
import React from "react";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";



export default function Carrinho() {
  
  const quantidadeTotal = mockItensCarrinho.reduce((total, item) => total + item.quantidade, 0);
  const valorTotal = mockItensCarrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
  
  return (
    <>
      <main>
        <div className="container p-5">
                <ListagemCarrinho itensCarrinho={mockItensCarrinho} />
                <ResumoCarrinho quantidadeTotal={quantidadeTotal} valorTotal={valorTotal} />
        </div>
      </main>
    </>
  );
}