const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);

describe('Getting data from API - ONG', () => {
    it('Calling GET endpoint without parameters', async () => {
        // Sends GET Request to /test endpoint
        const res = await request.get('/ong')
        expect(res.status).toBe(200);
        expect(res.body).toBe({});
        // ...
    })
});