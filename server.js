import { fastify } from 'fastify';

const server = fastify();

server.get('/', (req, res)=>{
return 'Home - Cadastro de usuarios';
});

server.get('/users', (req, res)=>{
    const nome = req.query.nome;
    const email = req.query.email;
    const telefone = req.query.telefone

    return `Lista de usuarios Filtro: nome: ${nome} - email: ${email} - telefone: ${telefone}`;
});


server.get('/users/id:', (req, res)=>{
    const id = req.params.id
return `Detalhes de usuario de id: ${id}`;
});

server.post('/users', (req, res)=>{
    const {nome, email, telefone} = req.body

return {
    'message': "Cadastro de usuario",
    nome,
    email,
    telefone
};
});

server.put('/users/:id',(req, res)=>{
    const id = req.params.id
    return `Usuario de id: ${id} atualizado com sucesso`;
})
server.delete('/users/:id',(req, res)=>{
    const id = req.params.id
    return `Usuario de id: ${id} excluido com sucesso`;
})

server.get('/users/:userId/pedidos/:pedidoId',(req, res)=>{
    // const userId = req.params.userId;
    // const pedidoId = req.params.pedidoId
    const {userId, periodoId} = req.params

    return `Pedido numero: ${pedidoId} do usuario id: ${userId} realizado com sucesso`;
})

server.listen({port: 3000}, (err, address) => {
if (err) {
console.error(err);
}
console.log( `Servidor rodando em ${address} ` );
});