
export const fetchProdutoDetails = async (nomeProduto: string | string[]) => {
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${nomeProduto}`);
    
    if (!response.ok) {
        throw new Error('Erro ao pegar os detalhes do produto');
    }
    
    return response.json();
};