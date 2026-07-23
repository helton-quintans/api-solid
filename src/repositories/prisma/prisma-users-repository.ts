//Todas as operações de banco de dados pelo passam repository, para não expor o prisma diretamente para o controller
// o Repository é uma camada de abstração da persistencia de dados entre o controller e o banco de dados, 
// para que o controller não precise conhecer a implementação do banco de dados, e sim apenas a interface do repository
import { prisma } from '@/lib/prisma';
import { Prisma, User } from '@prisma/client';

import type { UsersRepository } from '@/repositories/users-repository';

export class PrismaUsersRepository implements UsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    return user;
  }
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data
    });

    return user;
  }
}