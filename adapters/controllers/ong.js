const ongService = require('../../application/services/ong');

exports.post = async (request, reply) => {
    return await ongService.register(request.body);
}

exports.get = async (request, reply) => {
    return await ongService.findAll(request.body);
}

exports.getById = async (id, request, reply) => {
    return await ongService.findById(id);
}

exports.put = async (id, request, reply) => {
    return await ongService.update(id, request.body);
}

exports.patch = async (id, request, reply) => {
    return await ongService.update(id, request.body);
}

exports.delete = async (id, request, reply) => {
    return await ongService.delete(id);
}