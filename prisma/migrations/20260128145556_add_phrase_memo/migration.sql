-- CreateTable
CREATE TABLE `PhraseMemo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `phraseId` INTEGER NOT NULL,
    `memoText` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PhraseMemo_phraseId_key`(`phraseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PhraseMemo` ADD CONSTRAINT `PhraseMemo_phraseId_fkey` FOREIGN KEY (`phraseId`) REFERENCES `SongPhrase`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
