"use server"
import prisma from '../../lib/db';

export async function addTask(formData: FormData) {
    await prisma.task.create({
        data:{
            title: formData.get('title') as string,
        }
    })
}

export async function getTasks() {
    return await prisma.task.findMany()
}



