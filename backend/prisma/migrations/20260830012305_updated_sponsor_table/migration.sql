-- AlterTable
ALTER TABLE "Sponsor" ADD COLUMN     "amountDonated" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "websiteUrl" TEXT NOT NULL DEFAULT '';
