import { Request, Response } from 'express';
import { authenticateUser, checkIfUserExists } from './auth.service';
import { LoginDto, SignUpDto } from './auth.types';
import { UserTypes } from '../userType/userType.constants';
import { userService } from '../userType/user/user.service';

export const signup = async (req: Request, res: Response): Promise<void> => {
    const usuario = req.body as SignUpDto;
    try {
        if (await checkIfUserExists(usuario.email)) {
            res.status(400).json({ msg: 'Email informado já está sendo usado' });
        }

        const newUsuario = await userService.createUser({
            ...usuario,
            userTypeId: UserTypes.CLIENT,
        });
        
        res.status(201).json(newUsuario);

    } catch (e: any) {
        res.status(500).json(e.errors);
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    try {
        const resultado = await authenticateUser({ email, password });

        if (!resultado) {
            res.status(401).json({ msg: 'Email e/ou senha incorretos' });
            return;
        }

        const usuario = resultado.user; 
        const token = resultado.token;

        
        console.log("Copie o token gerado e cole no postman"); 
        console.log("Token gerado",token); 

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        req.session.uid = usuario.id; 
        req.session.userTypeId = usuario.userTypeId; 

        if (req.session.uid && req.session.userTypeId) {
            res.status(200).json({ msg: 'Usuário autenticado' });
        }

    } catch (e) {
        res.status(500).json(e);
    }
};