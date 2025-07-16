import { PrismaClient } from '@prisma/client';
import { CreateUserDto, UpdateUserDto, UserDto } from './user.types';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

class UserService {
  async getAllUsers(): Promise<UserDto[]> {
    return await prisma.user.findMany();
  }

  async createUser(data: CreateUserDto): Promise<UserDto> {
    return await prisma.user.create({
      data: {
        ...data,
        password: await this.hashPassword(data.password),
      },
    });
  }

  async findUserById(id: string): Promise<UserDto | null> {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<UserDto> {
    return await prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: string): Promise<UserDto> {
    return await prisma.user.delete({
      where: { id },
    });
  }

  private async hashPassword(password: string): Promise<string> {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }
}

export const userService = new UserService();