import { PrismaClient } from "@prisma/client";

// Ensuring that the PrismaClient instance is declared only once
declare global {
    var prisma: PrismaClient | undefined;
}

// Checking if the PrismaClient instance already exists
if (process.env.NODE_ENV === "production") {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
}

// Exporting the PrismaClient instance
const prisma = global.prisma;
export default prisma;
