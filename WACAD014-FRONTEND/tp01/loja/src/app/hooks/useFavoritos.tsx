import { useMutation } from "@tanstack/react-query";
import { Produto } from "../types/produto";
import { addProdutosFavoritos, deleteProdutoFavoritos } from "../services/favoritos";
import { toast } from "react-toastify";

export function useFavoritos() {
    const mutation = useMutation<Produto, Error, Produto>(
        {
            mutationFn: (novoFavorito: Produto) => addProdutosFavoritos(novoFavorito),
            onSuccess: (produto: Produto) => {
                toast.success(`${produto.nome} foi adicionado aos favoritos!`);
            },
            onError: () => {
                toast.error("Erro ao adicionar aos favoritos. Tente novamente.");
            }
        }
    );

    return mutation;
}

export function useDeleteFavorito(refetchFavoritos: () => void) {
    const mutation = useMutation<void, Error, string>({
        mutationFn: (id: string) => deleteProdutoFavoritos(id),
        onSuccess: () => {
            toast.success("Produto removido com sucesso!");
            refetchFavoritos();
        },
        onError: () => {
            toast.error("Erro ao remover o produto. Tente novamente.");
        }
            
    });

    return mutation;
}