// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://testdb_owner:evqu4wfNyi2Y@ep-jolly-forest-a56uddqw.us-east-2.aws.neon.tech/testdb?sslmode=require"
})

// async function getUsers(email : string) {
//   try {
//     await client.connect();
//     const fetchQuery = "SELECT * FROM users WHERE email = $1";
//     const values = [email];
//     const res = await client.query(fetchQuery, values);
//     if (res.rows.length > 0) {
//       console.log("User Found :", res.rows[0])
//       return res.rows[0];
//     } else {
//       console.log("No such user found")
//       return null;
//     }
//   } catch (error) {
//     console.log("Error while fetching the db :", error);
//     throw error;
//   } finally {
//     await client.end();
//   }
// }

// getUsers("rick01@gmail.com");

async function insertUsersTable(username: string, email: string, password: string) {
  await client.connect();
  try {
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log("INsertion success: ", res);      
  } catch (error) {
    console.log("Error during insertion: ", error);
  } finally {
    await client.end();
  }
}

insertUsersTable("soumya03", "soumya02@gmail.com", "somrthingrandom");

// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }

