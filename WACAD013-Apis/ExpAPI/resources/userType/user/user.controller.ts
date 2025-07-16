import { Request, Response } from 'express';
import { userService } from './user.service';
import { CreateUserDto, UpdateUserDto, UserDto } from './user.types';

export const index = async (req: Request, res: Response): Promise<void> =>  {

      const users = await userService.getAllUsers();
      res.json(users);
  }

export const create = async (req: Request, res: Response): Promise<void> =>  {
    const userData: CreateUserDto = req.body;
    const newUser = await userService.createUser(userData);
    res.status(201).json({ message: `Usuário ${newUser.name} criado!`});
  }

export const read = async (req: Request, res: Response):Promise<void> =>  {
    
      const user = await userService.findUserById(req.params.id);
      res.json(user);
  
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        res.json(user);
      }
    }

export const update = async (req: Request, res: Response): Promise<void> =>  {
    const userData: UpdateUserDto = req.body;
    const updatedUser = await userService.updateUser(req.params.id, userData);
    res.json({message: `Usuário ${updatedUser.name} atualizado `});
  }

export const remove = async (req: Request, res: Response): Promise<void> =>  {

      const deletedUser = await userService.deleteUser(req.params.id);
      res.json({ message: 'Usuário deletado'} );
    }