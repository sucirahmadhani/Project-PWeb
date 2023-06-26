// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const config = require('../config/secret');

// function generateToken(user) {
//   const payload = {
//     id: user.id,
//     email: user.email
//   };
//   const token = jwt.sign(payload, config.secretKey, { expiresIn: '5m' });
//   return token;
// }

// function verifyToken(token) {
//   try {
//     const decoded = jwt.verify(token, config.secretKey);
//     return decoded;
//   } catch (error) {
//     return null;
//   }
// }

// // Fungsi untuk mengenkripsi password
// async function hashPassword(password) {
//   const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(password, saltRounds);
//   return hashedPassword;
// }

// // Fungsi untuk membandingkan password yang diinputkan dengan password yang di-hash
// async function comparePassword(password, hashedPassword) {
//   const isMatch = await bcrypt.compare(password, hashedPassword);
//   return isMatch;
// }

// module.exports = {
//   generateToken,
//   verifyToken,
//   hashPassword,
//   comparePassword
// };

const jwt = require('jsonwebtoken')


exports.verifyToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.sendStatus(403);
        req.email = decoded.email;
        next();
    })
}