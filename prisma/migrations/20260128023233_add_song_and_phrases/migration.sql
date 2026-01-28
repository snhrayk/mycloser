-- CreateTable
CREATE TABLE `Song` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `background` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SongPhrase` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `songId` INTEGER NOT NULL,
    `order` INTEGER NOT NULL,
    `lyricEn` VARCHAR(191) NOT NULL,
    `lyricJa` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SongPhrase_songId_order_key`(`songId`, `order`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SongPhrase` ADD CONSTRAINT `SongPhrase_songId_fkey` FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
