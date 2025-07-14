import { Foto } from "./Foto"; // Importando a interface de Foto

export interface Produto {
    id: string;           // Identificador único do produto
    fotos: Foto[];       // Array de fotos do produto
    nome: string;         // Nome do produto
    preco: string;        // Preço do produto (como string, neste caso)
    descricao: string;    // Descrição do produto
    vendido: string;      // Indicador se foi vendido (string "true" ou "false")
    usuario_id: string;   // ID do usuário associado ao produto
}