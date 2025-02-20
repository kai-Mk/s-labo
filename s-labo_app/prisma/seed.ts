import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const roles = ["admin", "user"];
    for (const role of roles) {
        await prisma.role.create({
            data: {
                role_name: role,
            },
        });
    }

    const taskCategories = ["プロジェクト", "個人タスク", "自主学習"];
    for (const taskCategory of taskCategories) {
        await prisma.taskCategory.create({
            data: {
                task_category_name: taskCategory,
            },
        });
    }

    const timeBoxStatuses = ["MTG不可", "緊急のみ可", "MTG可能"];
    for (const timeBoxStatus of timeBoxStatuses) {
        await prisma.timeBoxStatus.create({
            data: {
                status_name: timeBoxStatus,
            },
        });
    }
};

main()
    .catch((err) => {
        console.error("Error seeding data:", err);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
