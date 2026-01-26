-- CreateTable
CREATE TABLE `webZemi_users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `class_name` VARCHAR(10) NULL,
    `graduation_year` INTEGER NULL,
    `name` VARCHAR(50) NULL,
    `username` VARCHAR(50) NULL,
    `password` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
