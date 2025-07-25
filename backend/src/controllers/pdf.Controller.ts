import { Request, Response } from "express";
import * as pdfService from '../services/pdf.service';

export async function uploadPDF(req:Request, res: Response) {
    const { filename, filepath } = req.body;
    const pdf = await pdfService.createPDF(filename, filepath);
    res.status(201).json(pdf);
}

export async function getPDFFile(req:Request, res: Response) {
    const pdf = await pdfService.findPDFById(+req.params.id);
    if (!pdf) return res.status(404).json({error: 'PDF not found'});
    res.json(pdf);    
}

export async function getPDFPages(req: Request, res: Response) {
    const pages = await pdfService.findPagesByPDFId(+req.params.id);
    res.json(pages);
}

export async function getSpecificPDFPage(req:Request, res: Response) {
    const { id, pageNumber } = req.params;

    const page = await pdfService.findSpecificPage(+id, +pageNumber);

    if (!page) return res.status(404).json({ error: 'Page not found, literally.'});

    res.json(page);
}
  
export async function deletePDF(req: Request, res: Response) {
    await pdfService.deletePDFservice(+req.params.id);
    res.status(204).send("<p>You catched ${req.params.id}.</p>");
}

export const getAllPDFFiles = async (req: Request, res: Response) => {
    try {
        const pdfs = await pdfService.getAllPDFs();
        res.json(pdfs);
    } catch (error) {
        res.status(500).json({ message: "Error on search pdfs." });
    }
};
  