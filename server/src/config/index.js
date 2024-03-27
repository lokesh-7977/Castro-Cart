import dotenv from 'dotenv';
dotenv.config();

const config = {
    PORT: process.env.PORT || 4000,
    DATABASE_URI: process.env.DATABASE_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRE: process.env.JWT_EXPIRE,
    S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
    S3_SECRET_KEY: process.env.S3_SECRET_KEY,
    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
    S3_REGION: process.env.S3_REGION
}

export default config;


