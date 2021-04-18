const ongService = require('../../application/services/ong');

exports.post = async (request, reply) => await ongService.register(request.body);

exports.get = async (request, reply) => await ongService.findAll(request.body);

exports.getById = async (id, request, reply) => await ongService.findById(id);

exports.put = async (id, request, reply) => await ongService.update(id, request.body);

exports.patch = async (id, request, reply) => await ongService.patch(id, request.body);

exports.delete = async (id, request, reply) => await ongService.delete(id);
