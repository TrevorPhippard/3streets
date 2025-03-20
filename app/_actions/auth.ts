"use server"
import prisma from '../../lib/db';

export async function addTask(formData: FormData) {
    await prisma.task.create({
        data:{
            title: formData.get('title') as string,
        }
    })
}
