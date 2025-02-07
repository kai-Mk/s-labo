/*
  Warnings:

  - You are about to drop the column `role_nme` on the `roles` table. All the data in the column will be lost.
  - Added the required column `role_name` to the `roles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `roles` DROP COLUMN `role_nme`,
    ADD COLUMN `role_name` VARCHAR(191) NOT NULL;
