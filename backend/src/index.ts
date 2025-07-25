import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './config/data-source';
import pdfRoutes from './routes/pdf.routes';

const app = express();
app.use(express.json());
app.use('/pdf', pdfRoutes);

AppDataSource.initialize()
    .then(() => {
        console.log('Conected to the database!');
        app.listen(3000, () => {
            console.log('Server up on port 3000');
        });
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco: ', err);
    });

