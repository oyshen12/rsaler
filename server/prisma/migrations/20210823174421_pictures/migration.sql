-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "pictures" TEXT[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profile_picture" TEXT NOT NULL DEFAULT E'none';
