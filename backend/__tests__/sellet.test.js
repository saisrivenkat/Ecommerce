const request = require('supertest');
const app  = require('../app')
const Shop = require('../model/shop')


describe(' test login functionality',()=>{
    describe('Login fail because of not providing the required fields',()=>{  
        test('200',async()=>{
            const mockUser={
                email:'n.srisai1234@gmail.com',
            }
            const res  = await request(app).post('/api/v2/shop/login-shop').send(mockUser)
            expect(res.statusCode).toBe(400)
        })

        test('Login failed because the User already exists',async()=>{
            const mockUser={
                email:'n.srisai1234@gmail.com',
                password:'1234567',
            }
            jest.spyOn(Shop,'findOne').mockImplementationOnce(()=>({
                select:jest.fn().mockResolvedValueOnce(null),
            }));
            const res  = await request(app).post('/api/v2/shop/login-shop').send(mockUser)
            expect(res.statusCode).toBe(400)
        })

    })
})