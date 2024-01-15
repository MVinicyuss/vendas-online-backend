import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAddress1705327515451 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE public.address (
                id integer NOT NULL,
                user_id integer NOT NULL,
                complement varchar NOT NULL,
                number integer NOT NULL,
                cep varchar NOT NULL,
                city_id integer NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT now(),
                updated_at TIMESTAMP NOT NULL DEFAULT now(),
                primary key (id),
                foreign key (user_id) references public.user(id),
                foreign key (city_id) references public.city(id)
            );

            CREATE SEQUENCE public.address_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;

            ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            drop table if exists public.address;
        `);
    }

}
