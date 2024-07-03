/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `NextLearningUser` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "NextLearningUser_username_key" ON "NextLearningUser"("username");
