const ongService = require('../../application/services/ong');

exports.post = async (request, reply) => {
    return await ongService.register(request.body);
}

exports.get = (request, reply) => {
    console.log('--------------');
    console.log('get ong');
    console.log('--------------');
    return { message: 'get ongs' };
}

exports.getById = (id, request, reply) => {
    console.log('--------------');
    console.log('get ong by id ' + id);
    console.log('--------------');
    return { message: String('get ong by id ' + id) };
}

exports.put = (id, request, reply) => {
    console.log('--------------');
    console.log('edit ong');
    console.log(request.body);
    console.log('--------------');
    return { message: String('edit ong ' + id) };
}

exports.patch = (id, request, reply) => {
    console.log('--------------');
    console.log('edit ong');
    console.log(request.body);
    console.log('--------------');
    return { message: String('edit ong ' + id) };
}

exports.delete = (id, request, reply) => {
    console.log('--------------');
    console.log('delete ong ' + id);
    console.log('--------------');
    return { message: String('delete ong ' + id) };
}