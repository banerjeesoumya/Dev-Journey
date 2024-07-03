-- CreateTable
CREATE TABLE "NextLearningUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "NextLearningUser_pkey" PRIMARY KEY ("id")
);
