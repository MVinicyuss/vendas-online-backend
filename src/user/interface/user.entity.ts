import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ name: 'email', type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ name: 'cpf', type: 'varchar', length: 255, nullable: false })
  cpf: string;

  @Column({ name: 'phone', type: 'varchar', length: 255 })
  phone: string;

  @Column({ name: 'password', type: 'varchar', length: 255, nullable: false })
  password: string;
}
