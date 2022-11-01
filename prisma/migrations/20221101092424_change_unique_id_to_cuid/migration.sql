/*
  Warnings:

  - The primary key for the `cards` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "cards_name_key";

-- AlterTable
ALTER TABLE "cards" DROP CONSTRAINT "cards_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "cards_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "cards_id_seq";
