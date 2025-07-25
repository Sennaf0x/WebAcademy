"use client";

import React from "react";
import ListaFavoritos from "../components/ListaFavoritos/ListaFavoritos";
import { useListaFavoritos } from "../hooks/getFavoritos";

const PageFavoritos: React.FC = () => {

    const { produtos, isPending, isError, refetchFavoritos } = useListaFavoritos();
    
    if (isPending) return <h5>Carregando...</h5>; 
    
    if (isError) return <h5>Carregando...</h5>; 
    
    if (!produtos || !Array.isArray(produtos)) return <h5>Não há produtos favoritos cadastrados no momento</h5>;
    
    return (
        <main>
            <div className="container p-5">
                <h2>Meus Favoritos</h2>
                <ListaFavoritos 
                    refetchFavoritos={refetchFavoritos}
                    produtos={produtos} />
            </div>
        </main>
    );
};

export default PageFavoritos;