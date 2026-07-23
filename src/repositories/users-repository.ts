import { Prisma, User } from "@prisma/client";

export interface UsersRepository {
  findByEmail(email: string): Promise<User | null>;
  create(user: Prisma.UserCreateInput): Promise<User>;
  // delete(userId: string): Promise<void>;
  // findById(userId: string): Promise<User | null>;
  // update(userId: string, data: Prisma.UserUpdateInput): Promise<User>;
}