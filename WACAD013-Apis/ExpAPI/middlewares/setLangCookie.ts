import { Request, Response, NextFunction } from 'express';

const setLangCookie = (req: Request, res: Response, next: NextFunction): void => {
 
if (!('lang' in req.cookies)) res.cookie('lang', 'pt-BR');
next();
};

export default setLangCookie