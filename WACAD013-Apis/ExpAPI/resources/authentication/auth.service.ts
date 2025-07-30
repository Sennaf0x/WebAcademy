// auth.service.ts
import bcrypt from "bcryptjs";
import { LoginDto, SignUpDto } from "./auth.types";
import { PrismaClient } from '@prisma/client';
import { UserTypes } from "../userType/userType.constants";

const prisma = new PrismaClient();

export const checkIfUserExists = async (email: string): Promise<boolean> => {
    const usuario = await prisma.user.findUnique({
        where: { email }
    });
    return !!usuario;
};

export const checkIsAdmin = async (uid: string): Promise<boolean> => {
    const usuario = await prisma.user.findUnique({
        where: { id: uid }
    });

    return usuario !== null && usuario.userTypeId === 'ADMIN';
};

export const authenticateUser = async (credenciais: LoginDto) => {
    const { email, password } = credenciais;
    const usuario = await prisma.user.findUnique({
        where: { email }
    });
    if (!usuario) return null;
    const isPasswordValid = await bcrypt.compare(password, usuario.password);
    return isPasswordValid ? usuario : null;
};