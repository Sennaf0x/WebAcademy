import { useQuery } from "@tanstack/react-query";
import { getListaFavoritos } from "../services/favoritos";


export function useListaFavoritos() {
    const { data, isPending, isError } = useQuery({
        queryKey: ["listaProdutosFavoritos"],
        queryFn: getListaFavoritos,
    });

    return { produtos: data, isPending, isError };
}