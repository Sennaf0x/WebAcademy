import { Produto } from "../types/produto";
import { apiFavoritos } from "./api";

export async function addProdutosFavoritos(novoFavorito: Produto){
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return apiFavoritos
        .post<Produto>('/favoritos', novoFavorito)
        .then((response) => response.data);
}

export async function getListaFavoritos(): Promise<Produto[]>{
    return apiFavoritos
        .get("/favoritos")
        .then((response) => response.data);
}

export async function deleteProdutoFavoritos(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return apiFavoritos
        .delete(`/favoritos/${id}`)
        .then((response) => response.data);
}