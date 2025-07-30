// auth.controller.ts
import { Request, Response } from 'express';
import { authenticateUser, checkIfUserExists } from './auth.service';
import { LoginDto, SignUpDto } from './auth.types';
import { UserTypes } from '../userType/userType.constants';
import { userService } from '../userType/user/user.service';

export const signup = async (req: Request, res: Response): Promise<void> => {
    const usuario = req.body as SignUpDto; // Use SignUpDto aqui
    try {
        if (await checkIfUserExists(usuario.email)) {
            res.status(400).json({ msg: 'Email informado já está sendo usado' });
        }

        // Aqui você deve implementar `createUsuario` para adicionar um novo usuário ao banco
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
        const usuario = await authenticateUser({ email, password });
        
        req.session.uid = usuario?.id;
        req.session.userTypeId = usuario?.userTypeId;
        if (req.session.uid && req.session.userTypeId){
            res.status(200).json({ msg: 'Usuário autenticado' });
        }
        
        if (!usuario) {
            res.status(401).json({ msg: 'Email e/ou senha incorretos' });
        }
        
        
    } catch (e) {
        res.status(500).json(e);
    }
};