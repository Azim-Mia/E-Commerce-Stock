require('dotenv').config();
const server_port= process.env.SERVER_PORT || 5000;
const db_url=process.env.DB_URL || 'mongodb://127.0.0.1:27017/E-Commerce Store';
const accessTokenKey=process.env.ACCESS_TOKEN_KEY || "mangoFirut";
const refreshTokenKey=process.env.REFRESH_TOKEN_KEY || "mangoFirut2";
const smtpUser=process.env.SMTP_USERNAME || '';
const smtpPassword= process.env.SMTP_PASSWORD || '';
const clientUrl=process.env.CLIENT_URL || '';
const storeImage="/data/data/com.termux/files/home/backend-express-village-project/public/images";
module.exports={server_port,db_url,accessTokenKey,refreshTokenKey,smtpPassword,smtpUser,clientUrl,storeImage};
