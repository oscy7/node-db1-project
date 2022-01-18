const { json } = require("express");
const express = require("express");
const accountsRouter = require('./accounts/accounts-router')


const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter)

server.use('*', (req,res) =>{
    res.status(400).json({
        message: 'account not found'
    })
})

module.exports = server;
