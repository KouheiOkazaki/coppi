/*
  Warnings:

  - Added the required column `aftertaste` to the `CoeFormData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `balance` to the `CoeFormData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overall` to the `CoeFormData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CoeFormData" ADD COLUMN     "aftertaste" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "balance" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "overall" DOUBLE PRECISION NOT NULL;
