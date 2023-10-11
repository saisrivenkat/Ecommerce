const request = require('supertest')
const app= require('../app');
const Messages = require('../model/messages.js')

describe('message controller test',()=>{
    describe('',()=>{
        test('',async()=>{
            jest.spyOn(Messages,'find').mockResolvedValueOnce({conversationId:"test123"})
            const res = await request(app).get('/api/v2/message/get-all-messages/1');
            expect(res.statusCode).toBe(201)

        })
    })
})
