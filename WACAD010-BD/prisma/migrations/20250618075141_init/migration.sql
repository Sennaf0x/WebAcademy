/*
  Warnings:

  - The primary key for the `cliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `cliente` table. All the data in the column will be lost.
  - You are about to alter the column `nome` on the `cliente` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `email` on the `cliente` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - Added the required column `cpf` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Cliente_email_key` ON `cliente`;

-- AlterTable
ALTER TABLE `cliente` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `celular` VARCHAR(20) NULL,
    ADD COLUMN `cpf` VARCHAR(15) NOT NULL,
    ADD COLUMN `data_nascimento` DATE NULL,
    MODIFY `nome` VARCHAR(100) NOT NULL,
    MODIFY `email` VARCHAR(100) NULL,
    ADD PRIMARY KEY (`cpf`);

-- CreateTable
CREATE TABLE `Endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf_cliente` VARCHAR(15) NOT NULL,
    `logradouro` VARCHAR(100) NULL,
    `numero` VARCHAR(10) NULL,
    `bairro` VARCHAR(50) NULL,
    `cidade` VARCHAR(50) NULL,
    `uf` CHAR(2) NULL,
    `cep` VARCHAR(12) NULL,

    INDEX `Endereco_cpf_cliente_idx`(`cpf_cliente`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubCategoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_categoria` INTEGER NOT NULL,
    `nome` VARCHAR(50) NULL,

    INDEX `SubCategoria_id_categoria_idx`(`id_categoria`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_categoria` INTEGER NULL,
    `id_subcategoria` INTEGER NULL,
    `modelo` VARCHAR(50) NULL,
    `fabricante` VARCHAR(50) NULL,
    `preco_base` DECIMAL(10, 2) NULL,
    `quantidade` INTEGER NULL,

    INDEX `Produto_id_categoria_idx`(`id_categoria`),
    INDEX `Produto_id_subcategoria_idx`(`id_subcategoria`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NumeroSerie` (
    `num_serie` VARCHAR(100) NOT NULL,
    `id_produto` INTEGER NOT NULL,

    INDEX `NumeroSerie_id_produto_idx`(`id_produto`),
    PRIMARY KEY (`num_serie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Compra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf_cliente` VARCHAR(15) NOT NULL,
    `endereco_envio` INTEGER NOT NULL,
    `data_hora` DATETIME(3) NOT NULL,
    `desconto` DECIMAL(10, 2) NULL,
    `forma_pagamento` VARCHAR(50) NULL,
    `total` DECIMAL(12, 2) NULL,

    INDEX `Compra_cpf_cliente_idx`(`cpf_cliente`),
    INDEX `Compra_endereco_envio_idx`(`endereco_envio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CompraProduto` (
    `id_compra` INTEGER NOT NULL,
    `id_produto` INTEGER NOT NULL,
    `quantidade` INTEGER NULL,
    `preco_unitario` DECIMAL(10, 2) NULL,

    INDEX `CompraProduto_id_produto_idx`(`id_produto`),
    PRIMARY KEY (`id_compra`, `id_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_cpf_cliente_fkey` FOREIGN KEY (`cpf_cliente`) REFERENCES `Cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubCategoria` ADD CONSTRAINT `SubCategoria_id_categoria_fkey` FOREIGN KEY (`id_categoria`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_id_categoria_fkey` FOREIGN KEY (`id_categoria`) REFERENCES `Categoria`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_id_subcategoria_fkey` FOREIGN KEY (`id_subcategoria`) REFERENCES `SubCategoria`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NumeroSerie` ADD CONSTRAINT `NumeroSerie_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_cpf_cliente_fkey` FOREIGN KEY (`cpf_cliente`) REFERENCES `Cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_endereco_envio_fkey` FOREIGN KEY (`endereco_envio`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CompraProduto` ADD CONSTRAINT `CompraProduto_id_compra_fkey` FOREIGN KEY (`id_compra`) REFERENCES `Compra`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CompraProduto` ADD CONSTRAINT `CompraProduto_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
