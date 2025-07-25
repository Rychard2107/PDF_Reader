import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { PDFPage } from './PDFPage';

@Entity('files')
export class PDFFile {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    filename!: string;

    @Column({default: 'uploads/nicetry.pdf'})
    filepath!: string;

    @Column({default: 'pending' })
    status!: string;

    @CreateDateColumn()
    create_at!: Date;

    @OneToMany(() => PDFPage, (page) => page.pdfFile, {
        cascade: true,
    })
        pages!: PDFPage[];
}