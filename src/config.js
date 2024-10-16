import { config } from "dotenv";

config()
//variables globales
export const MONGODB = process.env.MONGODB_URL || 'mongodb://localhost/test'
export const PORT = process.env.PORT || 3000