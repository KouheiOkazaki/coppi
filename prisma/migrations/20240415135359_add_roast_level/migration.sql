/*
  Warnings:

  - Added the required column `roastLevel` to the `CoeFormData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CoeFormData" ADD COLUMN     "roastLevel" TEXT NOT NULL;
