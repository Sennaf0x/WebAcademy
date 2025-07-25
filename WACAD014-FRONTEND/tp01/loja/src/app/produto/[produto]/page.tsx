"use client";

import { useParams } from 'next/navigation';
import Image from "next/image";
import { useFetchProdutoDetails } from '@/app/hooks/useFetchProdutos';

export default function Produto() {
    const { produto } = useParams();
    const { produtos, error, isLoading} = useFetchProdutoDetails(produto);

    if (isLoading) return <h5 className="card-title mb-4 fw-bold">Carregando...</h5>;
    if (error) return <h5 className="card-title mb-4 fw-bold">Erro ao carregar produto</h5>;

    return (
        <main>
            <div className="container p-5">
                <div className="card mb-4">
                    <div className="card-body d-flex flex-column align-items-center">
                        <h5 className="card-title mb-4 fw-light">Detalhes do produto</h5>

                        <h5 className="card-title mb-4 fw-bold">{produtos.nome}</h5>

                        <div className="g-3 mb-3">
                            <Image key={produtos.fotos[0]?.src} src={produtos.fotos[0]?.src || '/placeholder.png'} alt={produtos.nome} width={300} height={320} />
                        </div>

                        <p className="card-text fw-medium">
                            Valor: R$ {Number(produtos.preco).toFixed(2)}
                        </p>
                        <p className="card-text fw-medium">Descrição: &quot;{produtos.descricao}&quot;</p>
                        <p className="card-text fw-medium">Anunciado por: &quot;{produtos.usuario_id}&quot;</p>
                    </div>
                </div>
            </div>
        </main>
    );
}