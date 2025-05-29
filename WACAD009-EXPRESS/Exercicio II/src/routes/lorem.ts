import { Router, Request, Response } from 'express';

const router = Router();

const loremIpsum = (numParagraphs: number): string => {
    const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.";
    return Array(numParagraphs).fill(paragraph).join("\n\n");
};

router.get('/lorem/:paragraphs', (req: Request, res: Response) => {
    const numParagraphs = parseInt(req.params.paragraphs as string) || 1;
    const result = loremIpsum(numParagraphs);
    res.send(result);
});

export default router;