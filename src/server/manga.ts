import express from 'express';
import { PrismaClient } from '@prisma/client';
import type { Manga } from '@prisma/client';

const prisma = new PrismaClient();

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const query = await prisma.manga.findMany();
        res.send({
            data: query,
            message: 'success'
        }).status(200);
    } catch (error) {
        res.send({
            message: 'error'
        }).status(500);
    }
})

router.post('/', async (req, res) => {
    try {
        const query = await prisma.manga.create({
            data: req.body as Manga
        });
        res.send({
            data: query,
            message: 'success'
        }).status(200);
    } catch (error) {
        res.send({
            message: 'error'
        }).status(500);
    }
})

export default router;