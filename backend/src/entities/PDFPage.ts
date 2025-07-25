import {Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { PDFFile } from './PDFFile';

@Entity()
export class PDFPage {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  pageNumber!: number;

  @Column({ type: 'text' })
  textContent!: string;

  @ManyToOne(() => PDFFile, (pdfFile) => pdfFile.pages, {
    onDelete: 'CASCADE', // quando o PDF for deletado, as páginas também serão
  })
  pdfFile!: PDFFile;
}
