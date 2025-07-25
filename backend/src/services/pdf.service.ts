import { AppDataSource } from '../config/data-source';
import { PDFFile } from '../entities/PDFFile';
import { PDFPage } from '../entities/PDFPage';

const pdfRepo = AppDataSource.getRepository(PDFFile);
const pageRepo = AppDataSource.getRepository(PDFPage);

export async function createPDF(filename: string, filepath: string) {
    const pdf = pdfRepo.create({ filename, filepath, status: 'pending' });
    return await pdfRepo.save(pdf);
}

export async function findPDFById(id: number) {
    return await pdfRepo.findOne({ where: { id } });
}

export async function findPagesByPDFId(id: number) {
    return await pageRepo.find({ where: { pdfFile: { id } } });
}

export async function deletePDFservice(id: number) {
    await pageRepo.delete({ pdfFile: { id } });
    await pdfRepo.delete(id);
}

export async function findSpecificPage(id: number, pageNumber: number) {
    return await pageRepo.findOne({
        where: {
        id,
        pageNumber
        },
        relations: ['pdf']
    });
}

export async function getAllPDFs() {
    return await pdfRepo.find();
}
  