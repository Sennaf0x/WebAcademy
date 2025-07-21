import { Produto } from "../types/produto";
import { produtosApi } from "./api";

export async function getListaProduto(): Promise<Produto[]>{
    return produtosApi.get("/produto").then((response) => response.data);
}