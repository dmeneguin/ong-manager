const Ong = require('../model/ong');

exports.register = async (ong) => {
    try{
        const newOng = await Ong.create(ong);
        return newOng;
    } catch (err) {
        console.log(err);
        const error = new Error('An error ocurred while creating ong');
        error.statusCode = 500; 
        throw error;
    }
}