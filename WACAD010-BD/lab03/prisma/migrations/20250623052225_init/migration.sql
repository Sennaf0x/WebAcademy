-- CreateTable
CREATE TABLE `LogProduto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `produto_id` INTEGER NOT NULL,
    `acao` VARCHAR(10) NOT NULL,
    `data_evento` DATETIME(0) NOT NULL,
    `usuario_bd` VARCHAR(100) NULL,
    `dados_antes` JSON NULL,
    `dados_depois` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
