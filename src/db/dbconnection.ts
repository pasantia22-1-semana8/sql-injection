import pg from 'pg';

const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'prueba',
    password: '123',
    port: 5432,
    ssl: false
}
export const pool = new pg.Pool(config);

