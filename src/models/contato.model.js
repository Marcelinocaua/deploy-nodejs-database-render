const { PrismaClient } = require('@prisma/client');
 
const pool = require('../config/database');
 
const prisma = new PrismaClient();
 
 
const criarContato = async (nome, sobrenome, email) => {
  const novoContato = await prisma.contatos.create({
     data:
    { nome: nome,
      sobrenome: sobrenome,
      email: email
    }
  });
  return novoContato;
};
 
const listarContatos = async () => {
  const procurarContato = await prisma.contatos.findMany();
  return procurarContato;
};
 
module.exports = {
criarContato,
listarContatos
};