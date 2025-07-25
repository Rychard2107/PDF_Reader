import { Router } from 'express';
import { getAllPDFFiles ,uploadPDF, getPDFFile, getPDFPages, getSpecificPDFPage, deletePDF } from '../controllers/pdf.Controller';

const router = Router();

router.post('/upload', uploadPDF);
router.get('/:id', getPDFFile);
router.get("/", getAllPDFFiles);
router.get('/:id/pages', getPDFPages);
router.get('/:id/page/:pageNumber', getSpecificPDFPage);
router.delete('/delete/:id', deletePDF);

export default router;