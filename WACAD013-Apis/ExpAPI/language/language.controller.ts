import { Request, Response } from 'express';

function getLanguage(req: Request, res: Response) {
 const { lang } = req.cookies;
 res.cookie('lang', lang);
 res.json({ lang });
}

function changeLanguage(req: Request, res: Response) {
 const { lang } = req.body;
 res.cookie('lang', lang);
 res.json({ lang });
}

export default { getLanguage, changeLanguage };