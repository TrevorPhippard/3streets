"use server";

import prisma from '../../lib/db';
import { revalidatePath } from "next/cache";

export async function createTask(formData: FormData) {
    const input = formData.get("title") as string;

    await prisma.task.create({
        data: {
            title: input,
        },
    });
    revalidatePath("/");
}

export async function getData() {
    return await prisma.task.findMany({
        select: {
            title: true,
            id: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}