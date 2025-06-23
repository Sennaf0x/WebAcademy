import { PrismaClient } from './generated/prisma'
const prisma = new PrismaClient()

async function main() {
  // ======= CREATE =======
 
  const categoria = await prisma.categoria.create({
    data: {
      nome: 'Utensílios',
    },
  })
  console.log('categoria criada:', categoria)
  
  const subcategoria = await prisma.subCategoria.create({
      data: {
          nome: 'Cozinha',
          id_categoria: categoria.id,
        },
    })
  
  console.log('subcategoria criada:', subcategoria)

  // Criar um Produto
  const ProdutoCriado = await prisma.produto.create({
    data: {
      id_categoria: categoria.id,
      id_subcategoria: subcategoria.id,
      modelo: 'Garfo',
      fabricante: 'tramontina',
      preco_base: 1.50,
      quantidade: 100,
    },
  })
  console.log('Produto criado:', ProdutoCriado)

  // ======= READ =======
  const encontrarProduto = await prisma.produto.findUnique({
    where: {
      id: ProdutoCriado.id,
    },
    include: { categoria: true, subcategoria: true }
  })
  console.log('Produto encontrado:', encontrarProduto)

  // ======= UPDATE =======
  const atualizarProduto = await prisma.produto.update({
    where: {
      id: ProdutoCriado.id,
    },
    data: {
      quantidade: 50,
      preco_base: 1.75,
    },
  })
  console.log('Produto atualizado:', atualizarProduto)

  // ======= DELETE =======
  const deletarProduto = await prisma.produto.delete({
    where: {
      id: ProdutoCriado.id,
    },
  })
  console.log('Produto deletado:', deletarProduto)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })