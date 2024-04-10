/*
  Warnings:

  - You are about to drop the column `aftertaste` on the `CoeFormData` table. All the data in the column will be lost.
  - You are about to drop the column `aroma` on the `CoeFormData` table. All the data in the column will be lost.
  - You are about to drop the column `balance` on the `CoeFormData` table. All the data in the column will be lost.
  - You are about to drop the column `defects` on the `CoeFormData` table. All the data in the column will be lost.
  - You are about to drop the column `overall` on the `CoeFormData` table. All the data in the column will be lost.
  - You are about to drop the column `roastLevel` on the `CoeFormData` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CoeFormData" DROP COLUMN "aftertaste",
DROP COLUMN "aroma",
DROP COLUMN "balance",
DROP COLUMN "defects",
DROP COLUMN "overall",
DROP COLUMN "roastLevel";
