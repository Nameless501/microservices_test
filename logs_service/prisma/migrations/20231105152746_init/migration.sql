-- CreateEnum
CREATE TYPE "Type" AS ENUM ('create', 'update');

-- CreateTable
CREATE TABLE "Logs" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "type" "Type" NOT NULL,

    CONSTRAINT "Logs_pkey" PRIMARY KEY ("id")
);
