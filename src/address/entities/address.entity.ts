import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'address' })
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', nullable: false })
  userId: number;

  @Column({ name: 'complement', nullable: true })
  complement: string;

  @Column({ name: 'numberAddress', nullable: false })
  numberAddress: number;

  @Column({ name: 'cep', nullable: false })
  cep: string;

  @Column({ name: 'cityId', nullable: false })
  cityId: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @CreateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;
}