import dotenv from 'dotenv';
dotenv.config();

const config = {
    PORT: process.env.PORT || 4000,
    DATABASE_URI: process.env.DATABASE_URI
}

export default config;