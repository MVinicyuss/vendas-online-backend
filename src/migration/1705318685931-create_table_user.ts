import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1705318685931 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE IF NOT EXISTS public.user (
                id integer NOT NULL,
                name varchar NOT NULL,
                email varchar NOT NULL,
                phone varchar NOT NULL,
                cpf varchar NOT NULL,
                type_user int NOT NULL,
                password varchar NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                primary key (id)
            );

            CREATE SEQUENCE public.user_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE public.user_id_seq OWNED BY public.user.id;

            ALTER TABLE ONLY public.user ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE IF EXISTS public.user;
        `);
  }
}
