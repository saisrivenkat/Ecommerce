const request = require('supertest')
const app= require('../app');
const Conversation = require('../model/conversation')

describe('Conversation controller test',()=>{
    describe('create conversation',()=>{
        test('create',async()=>{
            jest.spyOn(Conversation,'findOne').mockResolvedValueOnce({groupTile:'test123'});
            const res = await request(app).post('/api/v2/conversation/create-new-conversation').send()
            expect(res.statusCode).toBe(201)
        })
        test('update',async()=>{
            jest.spyOn(Conversation,'findByIdAndUpdate').mockResolvedValueOnce({groupTile:'test123'});
            const res = await request(app).put('/api/v2/conversation/update-last-message/1').send()
            expect(res.statusCode).toBe(201)
        })
    })
})