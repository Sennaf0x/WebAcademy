"use client";

import React from "react";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";

export default function Produtos() {
  return (
    <>
      <ResumoCarrinho />
      <ListagemProdutos />
    </>
  );
}