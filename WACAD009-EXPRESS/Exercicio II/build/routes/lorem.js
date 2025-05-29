"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const loremIpsum = (numParagraphs) => {
    const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.";
    return Array(numParagraphs).fill(paragraph).join("\n\n");
};
router.get('/lorem/:paragraphs', (req, res) => {
    const numParagraphs = parseInt(req.params.paragraphs) || 1;
    const result = loremIpsum(numParagraphs);
    res.send(result);
});
exports.default = router;
