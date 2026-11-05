-- CreateEnum
CREATE TYPE "DonationType" AS ENUM ('CASH', 'SERVICE');

-- AlterTable
ALTER TABLE "Sponsor" ADD COLUMN     "donationType" "DonationType" NOT NULL DEFAULT 'CASH';
