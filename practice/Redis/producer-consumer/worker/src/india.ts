import { createClient } from "redis";

async function main() {
    const client = createClient();
    client.on("error", (err : any) => console.log("Redis Client Error", err));
    await client.connect();
    console.log("India Worker Connected to Redis");
    const res = await client.xReadGroup('india', 'worker-1', { 
        key: 'betteruptime:website', 
        id: '>' 
    }, {
        COUNT: 2,
    });
    if (!res) {
        console.log("No new messages");
        return;
    }
    console.log("Read from stream", (res[0]).messages);
    client.destroy();
}
main();