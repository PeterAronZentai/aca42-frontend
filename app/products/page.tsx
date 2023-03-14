import { headers } from "next/headers"
import { Pool } from "pg";


let _pool: Pool | null = null;

const useOrInitPool = () => {
    const connectionString = process.env.CONNECTION_STRING;
    if (!connectionString) {
        throw new Error("Missing CONNECTION_STRING");
    }
    if (!_pool) {
        _pool = new Pool({
            connectionString,
            ssl: true,
        })
    }
    return _pool;
}

export default async function page() {
    console.log('Product page');
    headers();
    
    const pool = useOrInitPool();
    const { rows } = await pool.query("select * from products");

    return <div>
        <h3>Products</h3>
        {rows.map((row) => <div key={row.id}>{row.name}</div>)}
    </div>
}