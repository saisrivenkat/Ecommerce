const app = require('../app');
const CoupounCode = require('../model/coupounCode')
const request = require('supertest');
describe('Coupon code controller test',()=>{
    test('all coupons ',async()=>{
        jest.spyOn(CoupounCode,'findOne').mockResolvedValueOnce({name:'testcoupon'});
        const res = await request(app).get('/api/v2/coupon/get-coupon-value/testcoupon')
        expect(res.statusCode).toBe(200);
    })
})