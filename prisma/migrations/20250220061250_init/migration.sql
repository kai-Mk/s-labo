-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "family_name" TEXT NOT NULL,
    "given_name" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "teams" (
    "team_id" SERIAL NOT NULL,
    "team_name" TEXT NOT NULL,
    "team_description" TEXT,
    "owner_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "teams_pkey" PRIMARY KEY ("team_id")
);

-- CreateTable
CREATE TABLE "roles" (
    "role_id" SERIAL NOT NULL,
    "role_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "roles_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "team_members" (
    "team_member_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "team_members_pkey" PRIMARY KEY ("team_member_id")
);

-- CreateTable
CREATE TABLE "project_members" (
    "project_member_id" SERIAL NOT NULL,
    "team_member_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "position_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "project_members_pkey" PRIMARY KEY ("project_member_id")
);

-- CreateTable
CREATE TABLE "positions" (
    "position_id" SERIAL NOT NULL,
    "position_nme" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "positions_pkey" PRIMARY KEY ("position_id")
);

-- CreateTable
CREATE TABLE "projects" (
    "project_id" SERIAL NOT NULL,
    "project_name" TEXT NOT NULL,
    "project_description" TEXT,
    "team_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "projects_pkey" PRIMARY KEY ("project_id")
);

-- CreateTable
CREATE TABLE "team_infos" (
    "info_id" SERIAL NOT NULL,
    "info_title" TEXT NOT NULL,
    "info_content" TEXT NOT NULL,
    "event_date" TIMESTAMP(3),
    "team_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "team_infos_pkey" PRIMARY KEY ("info_id")
);

-- CreateTable
CREATE TABLE "todos" (
    "todo_id" SERIAL NOT NULL,
    "todo_description" TEXT NOT NULL,
    "task_category_id" INTEGER NOT NULL,
    "project_id" INTEGER,
    "todo_checked" BOOLEAN NOT NULL,
    "team_member_id" INTEGER NOT NULL,
    "todo_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "todos_pkey" PRIMARY KEY ("todo_id")
);

-- CreateTable
CREATE TABLE "task_categories" (
    "task_category_id" SERIAL NOT NULL,
    "task_category_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "task_categories_pkey" PRIMARY KEY ("task_category_id")
);

-- CreateTable
CREATE TABLE "todo_comments" (
    "todo_comment_id" SERIAL NOT NULL,
    "receiver_id" INTEGER NOT NULL,
    "commenter_id" INTEGER NOT NULL,
    "comment_text" TEXT NOT NULL,
    "view_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "todo_comments_pkey" PRIMARY KEY ("todo_comment_id")
);

-- CreateTable
CREATE TABLE "overtime_reports" (
    "overtime_report_id" SERIAL NOT NULL,
    "has_overtime" BOOLEAN NOT NULL,
    "overtime_hours" DOUBLE PRECISION,
    "project_id" INTEGER,
    "task_description" TEXT,
    "team_member_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "overtime_reports_pkey" PRIMARY KEY ("overtime_report_id")
);

-- CreateTable
CREATE TABLE "time_boxes" (
    "time_box_id" SERIAL NOT NULL,
    "task_description" TEXT NOT NULL,
    "notes" TEXT,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "team_member_id" INTEGER NOT NULL,
    "task_category_id" INTEGER NOT NULL,
    "project_id" INTEGER,
    "time_box_status_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "time_boxes_pkey" PRIMARY KEY ("time_box_id")
);

-- CreateTable
CREATE TABLE "time_box_statuses" (
    "time_box_status_id" SERIAL NOT NULL,
    "status_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "time_box_statuses_pkey" PRIMARY KEY ("time_box_status_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_name_key" ON "users"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "roles_role_name_key" ON "roles"("role_name");

-- CreateIndex
CREATE UNIQUE INDEX "team_members_user_id_team_id_key" ON "team_members"("user_id", "team_id");

-- CreateIndex
CREATE UNIQUE INDEX "project_members_team_member_id_project_id_key" ON "project_members"("team_member_id", "project_id");

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("team_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_members" ADD CONSTRAINT "project_members_team_member_id_fkey" FOREIGN KEY ("team_member_id") REFERENCES "team_members"("team_member_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_members" ADD CONSTRAINT "project_members_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("project_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_members" ADD CONSTRAINT "project_members_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "positions"("position_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("team_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_infos" ADD CONSTRAINT "team_infos_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("team_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "todos" ADD CONSTRAINT "todos_task_category_id_fkey" FOREIGN KEY ("task_category_id") REFERENCES "task_categories"("task_category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "todos" ADD CONSTRAINT "todos_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("project_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "todos" ADD CONSTRAINT "todos_team_member_id_fkey" FOREIGN KEY ("team_member_id") REFERENCES "team_members"("team_member_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "todo_comments" ADD CONSTRAINT "todo_comments_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "team_members"("team_member_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "todo_comments" ADD CONSTRAINT "todo_comments_commenter_id_fkey" FOREIGN KEY ("commenter_id") REFERENCES "team_members"("team_member_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "overtime_reports" ADD CONSTRAINT "overtime_reports_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("project_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "overtime_reports" ADD CONSTRAINT "overtime_reports_team_member_id_fkey" FOREIGN KEY ("team_member_id") REFERENCES "team_members"("team_member_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time_boxes" ADD CONSTRAINT "time_boxes_team_member_id_fkey" FOREIGN KEY ("team_member_id") REFERENCES "team_members"("team_member_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time_boxes" ADD CONSTRAINT "time_boxes_task_category_id_fkey" FOREIGN KEY ("task_category_id") REFERENCES "task_categories"("task_category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time_boxes" ADD CONSTRAINT "time_boxes_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("project_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time_boxes" ADD CONSTRAINT "time_boxes_time_box_status_id_fkey" FOREIGN KEY ("time_box_status_id") REFERENCES "time_box_statuses"("time_box_status_id") ON DELETE RESTRICT ON UPDATE CASCADE;
