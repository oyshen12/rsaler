/*
  Warnings:

  - You are about to drop the column `login` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User.login_unique";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "login";
