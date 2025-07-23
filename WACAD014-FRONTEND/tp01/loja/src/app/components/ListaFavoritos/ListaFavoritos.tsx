import React from "react";
import ItemFavorito from "../ItemFavorito/ItemFavorito";
import { Produto } from "@/app/types/produto";

interface ListaFavoritosProps {
    produtos: Produto[];
}

export default function ListagemFavoritos({
    produtos,
}: ListaFavoritosProps) {

    return (
        <div className="card mb-4">
            <div className="row card-body">
                <h5 className="card-title mb-4 fw-light">Produtos selecionados</h5>
                <div className="table-responsive">
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Valor</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map((produto) => (
                                <ItemFavorito 
                                    key={produto.id}
                                    produto={produto} 
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>     
        </div>
        );
}
