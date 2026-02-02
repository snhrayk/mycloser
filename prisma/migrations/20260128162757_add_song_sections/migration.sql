-- CreateTable
CREATE TABLE `SongSection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `songId` INTEGER NOT NULL,
    `section` VARCHAR(191) NOT NULL,
    `background` TEXT NOT NULL,
    `order` INTEGER NOT NULL,

    UNIQUE INDEX `SongSection_songId_section_key`(`songId`, `section`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SongSection` ADD CONSTRAINT `SongSection_songId_fkey` FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
