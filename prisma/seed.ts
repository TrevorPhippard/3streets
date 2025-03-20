// prisma/seed.js
import { PrismaClient } from '@prisma/client';
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  // Helper function to hash passwords
  async function hashPassword(password: string) {
    const saltRounds = 10;
    return  bcrypt.hashSync(password, saltRounds);
  }

  try {
    // Seed Data
    // ---------------------------------------------------------------------
    // Questions
    await prisma.task.upsert({
      where: { id: 'task-id' },
      update: {},
      create: {
        id: 'task-id',
        title: 'something',
      },
    });

    // Log success
    console.log('Seeding completed successfully!');

  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1); // Exit with an error code
  } finally {
    await prisma.$disconnect();
  }
}

seed();