import { Produto } from "../types/produto";
import { apiFavoritos } from "./api";

export async function addProdutosFavoritos(novoFavorito: Produto){
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return apiFavoritos
        .post<Produto>('/favoritos', novoFavorito)
        .then((response) => response.data);
}