import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString)
console.log('Connected to PostgreSQL database', connectionString)

export default sql