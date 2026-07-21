//Todas as operações de banco de dados pelo repository, para não expor o prisma diretamente para o controller
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export class PrismaUsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data
    });

    return user;
  }
}