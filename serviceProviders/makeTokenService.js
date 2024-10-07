var jwt = require('jsonwebtoken');
const {server_port,db_url,accessTokenKey,refreshTokenKey,smtpPassword,smtpUser,clientUrl}=require('/data/data/com.termux/files/home/E-Commerce-Stock/secret.js');
const makeAccessTokensService= (payload, tokenKey, {expireIn})=>{
  const token = jwt.sign(payload,accessTokenKey, expireIn);
  return token;
}
const makeRefreshTokensService= (payload, tokenKey, {expireIn})=>{
  const token = jwt.sign(payload,refreshTokenKey, expireIn);
  return token;
}
module.exports={makeAccessTokensService,makeRefreshTokensService};
