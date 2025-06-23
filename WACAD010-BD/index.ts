import { PrismaClient, Prisma } from './generated/prisma'
const prisma = new PrismaClient()

async function main() {
  // Crie categorias e subcategorias
  const categorias = []
  const subcategorias = []

  // Supondo 3 categorias, cada uma com 2 subcategorias
  for (let i = 1; i <= 3; i++) {
    const categoria = await prisma.categoria.create({
      data: {
        nome: `Categoria ${i}`
      }
    })
    categorias.push(categoria)

    for (let j = 1; j <= 2; j++) {
      const subcat = await prisma.subCategoria.create({
        data: {
          nome: `Subcategoria ${i}.${j}`,
          id_categoria: categoria.id
        }
      })
      subcategorias.push(subcat)
    }
  }

  // Crie produtos e números de série
  const produtos: any[] = []
  const numerosSerie: any[] = []
  for (let i = 1; i <= 5; i++) {
    const categoria = categorias[i % categorias.length]
    const subcategoria = subcategorias[i % subcategorias.length]
    const produto = await prisma.produto.create({
      data: {
        modelo: `Produto Modelo ${i}`,
        fabricante: `Fabricante ${i}`,
        preco_base: new Prisma.Decimal(10.0 * i),
        quantidade: 50 + i,
        id_categoria: categoria.id,
        id_subcategoria: subcategoria.id,
      }
    })
    produtos.push(produto)

    // Cada produto tem 2 números de série
    for (let k = 1; k <= 2; k++) {
      const numSerie = await prisma.numeroSerie.create({
        data: {
          num_serie: `SERIE${i}-${k}`,
          id_produto: produto.id
        }
      })
      numerosSerie.push(numSerie)
    }
  }

  // Crie 10 clientes com endereços, compras e itens de compra
  for (let i = 1; i <= 10; i++) {
    const cpf = `${100000000 + i}`
    const cliente = await prisma.cliente.create({
      data: {
        cpf,
        nome: `Cliente ${i}`,
        email: `cliente${i}@email.com`,
        data_nascimento: new Date(`199${i % 10}-01-01`),
        celular: `319999000${i}`,
        enderecos: {
          create: [{
            logradouro: `Rua X${i}`,
            numero: `${i}`,
            bairro: `Centro`,
            cidade: `Cidade ${i}`,
            uf: `MG`,
            cep: `30000-00${i}`
          }]
        }
      },
      include: { enderecos: true }
    })

    // Pega o id do endereço criado para usar na compra
    const enderecoEnvio = cliente.enderecos[0]

    // Vamos fazer cada cliente comprar 2 produtos
    const compra = await prisma.compra.create({
      data: {
        cpf_cliente: cpf,
        endereco_envio: enderecoEnvio.id,
        data_hora: new Date(),
        desconto: new Prisma.Decimal(i),
        forma_pagamento: i % 2 === 0 ? "PIX" : "Cartão",
        total: new Prisma.Decimal(100.0 + i),
        itens: {
          create: [
            {
              id_produto: produtos[i % produtos.length].id,
              quantidade: 1,
              preco_unitario: produtos[i % produtos.length].preco_base
            },
            {
              id_produto: produtos[(i+1) % produtos.length].id,
              quantidade: 2,
              preco_unitario: produtos[(i+1) % produtos.length].preco_base
            }
          ]
        }
      }
    })
    console.log(`Cliente ${i} criado, compra:`, compra.id)
  }
  console.log("Processo concluído!")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })