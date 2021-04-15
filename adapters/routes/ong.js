const controller = require('../controllers/ong');

module.exports = app => {

    app.post('/ong', async (request, reply) => {
        const response = await controller.post(request, reply);
        return reply.json(response);
    })

    app.get('/ong', async (request, reply) => {
        const response =  await controller.get(request, reply);
        return reply.json(response);
    })

    app.get('/ong/:id', async (request, reply) => {
        const response = await controller.getById(request.params.id, request, reply);
        return reply.json(response);
    })

    app.put('/ong/:id', async (request, reply) => {
        const response = await controller.put(request.params.id, request, reply);
        return reply.json(response);
    })

    app.patch('/ong/:id', async (request, reply) => {
        const response = await controller.patch(request.params.id, request, reply);
        return reply.json(response);
    })

    app.delete('/ong/:id', async (request, reply) => {
        const response = await controller.delete(request.params.id, request, reply);
        return reply.json(response);
    })
}