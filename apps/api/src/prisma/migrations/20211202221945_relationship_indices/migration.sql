/*
  Warnings:

  - You are about to alter the column `currentPeriodEnd` on the `Subscription` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `currentPeriodStart` on the `Subscription` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `trialStart` on the `Subscription` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `trialEnd` on the `Subscription` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `cancelAt` on the `Subscription` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `cancelledAt` on the `Subscription` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `endedAt` on the `Subscription` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `Subscription` MODIFY `currentPeriodEnd` TIMESTAMP NOT NULL,
    MODIFY `currentPeriodStart` TIMESTAMP NOT NULL,
    MODIFY `trialStart` TIMESTAMP NULL,
    MODIFY `trialEnd` TIMESTAMP NULL,
    MODIFY `cancelAt` TIMESTAMP NULL,
    MODIFY `cancelledAt` TIMESTAMP NULL,
    MODIFY `endedAt` TIMESTAMP NULL;

-- CreateIndex
CREATE INDEX `Price_productId_idx` ON `Price`(`productId`);

-- CreateIndex
CREATE INDEX `Subscription_userId_idx` ON `Subscription`(`userId`);

-- CreateIndex
CREATE INDEX `Subscription_priceId_idx` ON `Subscription`(`priceId`);
