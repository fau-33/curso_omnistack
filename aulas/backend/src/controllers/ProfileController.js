const connection = require('../database/connection');


module.exports = {
    async indexedDB(request, response){
        const ong_id = request.headers.authorization;

        const incindents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

     return response.json(incidents);       

    }
}