import { createClient } from "redis";

async function main() {
    const client = createClient();
    client.on("error", (err : any) => console.log("Redis Client Error", err));
    await client.connect();
    console.log("USA Worker Connected to Redis");
    console.log("Reading for worker-1 in USA Region")
    const res1 = await client.xReadGroup('usa', 'worker-1', {
        key: 'betteruptime:website',
        id: '>'
    }, {
        COUNT: 2,
    });
    if (!res1) {
        console.log("No new messages");
        return;
    }
    console.log("Read from stream", (res1[0]).messages);
    console.log("Reading for worker-2 in USA Region")
    const res2 = await client.xReadGroup('usa', 'worker-2', {
        key: 'betteruptime:website',
        id: '>'
    }, {
        COUNT: 2,
    });
    if (!res2) {
        console.log("No new messages");
        return;
    }
    console.log("Read from stream", (res2[0]).messages);
    client.destroy();
}
main();