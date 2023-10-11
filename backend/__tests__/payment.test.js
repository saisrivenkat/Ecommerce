const request = require('supertest');
const app  = require('../app')

describe(' Payment Link test',()=>{
    describe('Sending Stripe api key to frontned',()=>{  
        test('API key',async()=>{
            const res  = await request(app).get('/api/v2/payment/stripeapikey')
            expect(res.statusCode).toBe(200)
        })
        test('creating a payment process',async()=>{
            jest.doMock('stripe',()=>{
                return jest.fn(()=>{
                    paymentIntents:jest.fn().mockResolvedValueOnce(true)
                    create:jest.fn().mockResolvedValueOnce(true);
                })
            })
            const res = await request(app).post('/api/v2/payment/process').send({amount:2000})
            expect(res.statusCode).toBe(500);
        })
    })
})