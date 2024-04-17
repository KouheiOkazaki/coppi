/*
  Warnings:

  - Added the required column `breakAroma` to the `CoeFormData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `crustAroma` to the `CoeFormData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dryAroma` to the `CoeFormData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CoeFormData" ADD COLUMN     "breakAroma" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "crustAroma" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "dryAroma" DOUBLE PRECISION NOT NULL;
