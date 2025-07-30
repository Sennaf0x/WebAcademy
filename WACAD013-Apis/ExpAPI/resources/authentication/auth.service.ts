import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { LoginDto } from "./auth.types";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const checkIfUserExists = async (email: string): Promise<boolean> => {
    const usuario = await prisma.user.findUnique({ where: { email } });
    return usuario !== null;
};

export const checkIsAdmin = async (uid: string): Promise<boolean> => {
    const usuario = await prisma.user.findUnique({ where: { id: uid } });
    return usuario !== null && usuario.userTypeId === 'ADMIN';
};

export const authenticateUser = async (credenciais: LoginDto) => {
    const { email, password } = credenciais;
    const usuario = await prisma.user.findUnique({ where: { email } });

    if (!usuario) return null;

    const isPasswordValid = await bcrypt.compare(password, usuario.password);
    
    if (isPasswordValid) {
        return { user: usuario, token: generateToken(usuario) };
    }

    return null;
};

const generateToken = (user: { id: string; email: string; userTypeId: string }) => {
    const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';
    const payload = {
        id: user.id,
        email: user.email,
        userTypeId: user.userTypeId,
    };

    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};