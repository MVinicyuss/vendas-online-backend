import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCity1705327495235 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE public.city (
                id integer NOT NULL,
                state_id INTEGER NOT NULL,
                name varchar NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT now(),
                updated_at TIMESTAMP NOT NULL DEFAULT now(),
                primary key (id),
                foreign key (state_id) references public.state(id)
            );

            CREATE SEQUENCE public.city_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE public.city_id_seq OWNED BY public.city.id;

            ALTER TABLE ONLY public.city ALTER COLUMN id SET DEFAULT nextval('public.city_id_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            drop table if exists public.city;
        `);
    }

}
