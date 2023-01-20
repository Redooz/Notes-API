import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 50
    })
    title: string

    @Column()
    description: string
}