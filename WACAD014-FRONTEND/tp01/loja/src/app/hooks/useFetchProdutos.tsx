import { useQuery } from "react-query";
import { fetchProdutoDetails } from "../services/fetchFavoritos";

export function useFetchProdutoDetails(produto: string | string[]) {
    const { data, error, isLoading } = useQuery({
        queryKey: ['produto', produto],
        queryFn: () => fetchProdutoDetails(produto),
    });

    return { produtos: data, error, isLoading };
}