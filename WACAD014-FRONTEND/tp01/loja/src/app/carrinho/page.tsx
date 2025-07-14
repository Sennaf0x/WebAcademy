"use client";
import React, { useState } from "react";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import { ItensListaCarrinho } from "../mocks/itensListaCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import { ItemCarrinho as ItemCarrinhoType } from "@/app/types/carrinho";

export default function Carrinho() {

    const [itensCarrinho, setItensCarrinho] = useState<ItemCarrinhoType[]>(ItensListaCarrinho);
    const quantidadeTotal = itensCarrinho.reduce((total, item) => total + item.quantidade, 0);
    const valorTotal = itensCarrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
    const removerItemDoCarrinho = (id: string) => {
        setItensCarrinho(prevItens => prevItens.filter(item => item.id !== id));
    };

    return (
        <main>
            <div className="container p-5">
                <ListagemCarrinho itensCarrinho={itensCarrinho} removerItemDoCarrinho={removerItemDoCarrinho} />
                <ResumoCarrinho quantidadeTotal={quantidadeTotal} valorTotal={valorTotal} />
            </div>
        </main>
    );
}