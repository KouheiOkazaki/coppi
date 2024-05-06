-- AlterTable
ALTER TABLE "CoeFormData" ADD COLUMN     "acidityProfiles" TEXT[],
ADD COLUMN     "aftertasteProfiles" TEXT[],
ADD COLUMN     "balanceProfiles" TEXT[],
ADD COLUMN     "flavorProfiles" TEXT[],
ADD COLUMN     "mouthfeelProfiles" TEXT[],
ADD COLUMN     "overallProfiles" TEXT[];
