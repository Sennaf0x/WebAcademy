import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

export const isAuth = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'Não autorizado' });
        return;
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            res.status(403).json({ message: 'Token inválido' });
            return;
        }

        req.user = decoded;
        next();
    });
};