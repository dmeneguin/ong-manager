const controller = require('../controllers/ong');

module.exports = app => {

    app.post('/ong', (request, reply) => {
        return controller.post(request, reply);
    })

    app.get('/ong', async (request, reply) => {
        return controller.get(request, reply);
    })

    app.get('/ong/:id', async (request, reply) => {
        return controller.getById(request.params.id, request, reply);
    })

    app.put('/ong/:id', async (request, reply) => {
        return controller.put(request.params.id, request, reply);
    })

    app.patch('/ong/:id', async (request, reply) => {
        return controller.patch(request.params.id, request, reply);
    })

    app.delete('/ong/:id', async (request, reply) => {
        return controller.delete(request.params.id, request, reply);
    })
}