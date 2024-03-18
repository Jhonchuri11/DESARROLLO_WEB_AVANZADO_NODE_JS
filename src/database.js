import { createPool } from "mysql2/promise";

const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root1234',
    database: 'stack_men'
});

//console.log(pool);

export default pool;