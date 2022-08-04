/*
  Warnings:

  - You are about to drop the column `email` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `nis` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `student` table. All the data in the column will be lost.
  - Added the required column `time` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `applicant` DROP FOREIGN KEY `Applicant_psbId_fkey`;

-- DropForeignKey
ALTER TABLE `applicantdocument` DROP FOREIGN KEY `ApplicantDocument_applicantId_fkey`;

-- DropForeignKey
ALTER TABLE `batch` DROP FOREIGN KEY `Batch_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `classroom` DROP FOREIGN KEY `ClassRoom_batchId_fkey`;

-- DropForeignKey
ALTER TABLE `galleryimage` DROP FOREIGN KEY `GalleryImage_galleryId_fkey`;

-- DropForeignKey
ALTER TABLE `headmaster` DROP FOREIGN KEY `Headmaster_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `lesson` DROP FOREIGN KEY `Lesson_batchId_fkey`;

-- DropForeignKey
ALTER TABLE `parent` DROP FOREIGN KEY `Parent_studentId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `postcomment` DROP FOREIGN KEY `PostComment_postId_fkey`;

-- DropForeignKey
ALTER TABLE `postcomment` DROP FOREIGN KEY `PostComment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `postimage` DROP FOREIGN KEY `PostImage_postId_fkey`;

-- DropForeignKey
ALTER TABLE `semester` DROP FOREIGN KEY `Semester_yearId_fkey`;

-- DropForeignKey
ALTER TABLE `specialprogram` DROP FOREIGN KEY `SpecialProgram_teacherId_fkey`;

-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `Student_classRoomId_fkey`;

-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `Student_yearId_fkey`;

-- DropForeignKey
ALTER TABLE `teacher` DROP FOREIGN KEY `Teacher_batchId_fkey`;

-- DropForeignKey
ALTER TABLE `teacher` DROP FOREIGN KEY `Teacher_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `teacher` DROP FOREIGN KEY `Teacher_lessonId_fkey`;

-- DropIndex
DROP INDEX `Student_email_key` ON `student`;

-- DropIndex
DROP INDEX `Student_nis_key` ON `student`;

-- AlterTable
ALTER TABLE `lesson` ADD COLUMN `time` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `student` DROP COLUMN `email`,
    DROP COLUMN `emailVerified`,
    DROP COLUMN `nis`,
    DROP COLUMN `phone`;

-- AlterTable
ALTER TABLE `teacher` MODIFY `nip` VARCHAR(191) NULL;
