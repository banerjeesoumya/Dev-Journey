import { createClient } from "redis";

async function main() {
    const client = createClient();
    client.on("error", (err : any) => console.log("Redis Client Error", err));
    await client.connect();
    console.log("Producer Connected to Redis");
    const res1 = await client.xAdd("betteruptime:website", "*", {
        url: "https://kiit.ac.in",
        id: "1"
    })
    console.log("Added to stream", res1);
    const res2 = await client.xAdd("betteruptime:website", "*", {
        url: "https://twitter.com",
        id: "2"
    })
    console.log("Added to stream", res2);
    const res3 = await client.xAdd("betteruptime:website", "*", {
        url: "https://cal.com",
        id: "3"
    })
    console.log("Added to stream", res3);
    const res4 = await client.xAdd("betteruptime:website", "*", {
        url: "https://linkedin.com",
        id: "4"
    })
    console.log("Added to stream", res4);
    client.destroy();
}
main();