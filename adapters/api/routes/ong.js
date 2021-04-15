const controller = require('../../controllers/ong');
const validators = require('../validators/ong');

const invalidRequestReply = (request, reply, errors) => {
    return reply.status(400).json({
        method: request.method,
        status: reply.statusCode,
        error: errors
        });
}

module.exports = app => {

    app.post('/ong', validators.registerValidator(), async (request, reply) => {
        const errors = validators.validateRequest(request);
        if (errors.length > 0) {
            return invalidRequestReply(request,reply,errors);
        }
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

    app.put('/ong/:id', validators.updateValidator(), async (request, reply) => {
        const errors = validators.validateRequest(request);
        if (errors.length > 0) {
            return invalidRequestReply(request,reply,errors);
        }        
        const response = await controller.put(request.params.id, request, reply);
        return reply.json(response);
    })

    app.patch('/ong/:id', validators.patchValidator(), async (request, reply) => {
        const errors = validators.validateRequest(request);
        if (errors.length > 0) {
            return invalidRequestReply(request,reply,errors);
        }        
        const response = await controller.patch(request.params.id, request, reply);
        return reply.json(response);
    })

    app.delete('/ong/:id', async (request, reply) => {
        const response = await controller.delete(request.params.id, request, reply);
        return reply.json(response);
    })
}