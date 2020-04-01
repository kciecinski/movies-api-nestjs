
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  title: string;

  @Column()
  desc: string;

  @Column({ default: 0 })
  rating: number;

  @Column({ default: 0 })
  numberOfRates: number;
}