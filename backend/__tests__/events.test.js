const app = require('../app');
const Event = require("../model/event");
const request = require('supertest');

const mockEvents = {
    name:"first",
    type:"dummy"
}
describe('Events Controller test',()=>{
    describe('get all Events',()=>{
        test('get all events',async()=>{
            jest.spyOn(Event,'find').mockResolvedValueOnce(mockEvents);
            const res  = await request(app).get('/api/v2/event/get-all-events')
            expect(res.statusCode).toBe(201)
        })
        test('get an event with Id',async()=>{
            jest.spyOn(Event,'find').mockResolvedValueOnce(mockEvents);
            const res = await request(app).get('/api/v2/event/get-all-events/1');
            expect(res.statusCode).toBe(201)
        })
        test('Delete an event with Id',async()=>{
            jest.spyOn(Event,'findById').mockResolvedValueOnce(null);
            const res = await request(app).delete('/api/v2/event/delete-shop-event/1');
            expect(res.statusCode).toBe(404)
        })
        test('Create a event',async()=>{
            jest.spyOn(Event,'findById').mockResolvedValueOnce(null);
            const res = await request(app).post('/api/v2/event/create-event').send({shopId:'123'})
            expect(res.statusCode).toBe(400)
        })
    })
})