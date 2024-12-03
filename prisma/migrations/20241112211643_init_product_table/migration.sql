/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- DropTable
DROP TABLE `Post`;

-- DropTable
DROP TABLE `Profile`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_client` INTEGER NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `cep` VARCHAR(8) NULL,
    `country` VARCHAR(45) NULL,
    `city` VARCHAR(45) NULL,
    `neighborhood` VARCHAR(45) NULL,
    `street` VARCHAR(45) NOT NULL,
    `number` VARCHAR(45) NOT NULL,
    `complement` VARCHAR(45) NULL,
    `phone` VARCHAR(14) NOT NULL,

    INDEX `fk_client_address`(`id_client`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(128) NOT NULL,
    `surname` VARCHAR(128) NOT NULL,
    `email` VARCHAR(128) NOT NULL,
    `password_encrypted` VARCHAR(255) NOT NULL,
    `iv` VARCHAR(255) NOT NULL,
    `date_created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `date_deleted` DATETIME(0) NULL,
    `inactive` TINYINT NOT NULL DEFAULT 0,
    `token` VARCHAR(255) NOT NULL,
    `last_login` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `cpf` VARCHAR(11) NULL,
    `cnpj` VARCHAR(14) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `favorite` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_client` INTEGER NOT NULL,
    `id_product` INTEGER NOT NULL,
    `date_created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `amount` INTEGER NOT NULL DEFAULT 1,

    INDEX `fk_client_favorite`(`id_client`),
    INDEX `fk_product_favorite`(`id_product`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(50) NOT NULL,
    `description` VARCHAR(50) NULL,
    `price` FLOAT NOT NULL,
    `cost` FLOAT NOT NULL,
    `mean_rating` FLOAT NULL DEFAULT 0,
    `image_1` VARCHAR(255) NULL,
    `image_2` VARCHAR(255) NULL,
    `image_3` VARCHAR(255) NULL,
    `image_4` VARCHAR(255) NULL,
    `image_5` VARCHAR(255) NULL,
    `date_created` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `date_updated` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `date_deleted` DATETIME(0) NULL,
    `inactive` TINYINT NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sac` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_client` INTEGER NOT NULL,
    `title` VARCHAR(45) NULL,
    `description` VARCHAR(45) NULL,
    `category` VARCHAR(45) NULL,
    `status` ENUM('Open', 'Close', 'In Progress') NOT NULL DEFAULT 'Open',

    INDEX `fk_client_sac`(`id_client`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shopping_cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` INTEGER NOT NULL DEFAULT 1,
    `id_client` INTEGER NOT NULL,
    `id_product` INTEGER NOT NULL,
    `date_created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_client_cart`(`id_client`),
    INDEX `fk_product_cart`(`id_product`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `fk_client_address` FOREIGN KEY (`id_client`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `favorite` ADD CONSTRAINT `fk_client_favorite` FOREIGN KEY (`id_client`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `favorite` ADD CONSTRAINT `fk_product_favorite` FOREIGN KEY (`id_product`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sac` ADD CONSTRAINT `fk_client_sac` FOREIGN KEY (`id_client`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `shopping_cart` ADD CONSTRAINT `fk_client_cart` FOREIGN KEY (`id_client`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `shopping_cart` ADD CONSTRAINT `fk_product_cart` FOREIGN KEY (`id_product`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
