/*
  Warnings:

  - You are about to drop the column `hashed_password` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - Added the required column `hashedPassword` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `hashed_password`,
    DROP COLUMN `password`,
    ADD COLUMN `hashedPassword` VARCHAR(191) NOT NULL;
