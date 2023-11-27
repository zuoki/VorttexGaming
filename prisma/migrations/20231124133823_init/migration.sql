/*
  Warnings:

  - You are about to drop the column `gameId` on the `License` table. All the data in the column will be lost.
  - Added the required column `licenseId` to the `Games` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "License" DROP CONSTRAINT "License_gameId_fkey";

-- AlterTable
ALTER TABLE "Games" ADD COLUMN     "licenseId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "License" DROP COLUMN "gameId";

-- AddForeignKey
ALTER TABLE "Games" ADD CONSTRAINT "Games_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
