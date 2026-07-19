import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("mani2005", 10);

  await prisma.user.create({
    data: {
      username: "mani",
      email: "manimani64976@gmail.com",
      password: hashedPassword,
    },
  });

  console.log(" User created successfully");
}

main()
  .catch((err) => {
    console.error(err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });