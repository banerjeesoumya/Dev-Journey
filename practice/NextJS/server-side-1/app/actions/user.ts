"use server"
import client from "@/db"

export async function signup(email : string, password: string) {
    try {
        await client.nextLearningUser.create({
            data : {
                username : email,
                password : password
            }
        });
        return true;
    } catch (e) {
        return false
    }
}