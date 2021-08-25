/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "phone_number" DROP NOT NULL,
ALTER COLUMN "phone_number" DROP DEFAULT,
ALTER COLUMN "profile_picture" DROP NOT NULL,
ALTER COLUMN "profile_picture" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "geolocation" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.login_unique" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
