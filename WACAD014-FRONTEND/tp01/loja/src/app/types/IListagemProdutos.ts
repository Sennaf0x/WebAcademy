import { Produto } from "./produto";

export interface IListagemProdutos {
    produtos: Produto[];
    adicionarAoCarrinho: (produto: Produto) => void;
}