import { PrismaClient } from "@prisma/client";
import client from "@/db";


async function fetchData() {
    const user = await client.nextLearningUser.findFirst();

    return {
        username : user?.username
    }
}

export default async function User() {
    const data = await fetchData();
    return (
        <div>
            {data.username}
        </div>
    );    
}