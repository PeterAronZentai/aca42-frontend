import { headers } from "next/headers"

export default async function page() {
    console.log("Env page");
    const e = [...headers()].reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {} as Record<string, string>);

    return <div>
        <h3>Headers</h3>
        <pre>
            {JSON.stringify(e, null, 2)}
        </pre>
        <h3>Hello Env!</h3>
        <pre>
            {JSON.stringify(process.env, null, 2)}
        </pre>
    </div>
}