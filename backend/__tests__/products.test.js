const request = require('supertest');
const app  = require('../app')
const Product = require('../model/product');

const allProducts=[
    {
        shopId:1,
        name:"Iphone",
        price:2000
    },{
        shopId:1,
        name:"Iphone",
        price:2000
    },{
        shopId:2,
        name:"Iphone",
        price:2000
    }
]

describe(' Peoducts  functionality',()=>{
    describe('get all products',()=>{  
        test('201',async()=>{
            jest.spyOn(Product,'find').mockImplementationOnce(()=>({
                sort:jest.fn().mockResolvedValueOnce(allProducts),
            }));
            const res  = await request(app).get('/api/v2/product/get-all-products')
            
            expect(res.statusCode).toBe(201)
        })
    })
   describe('get products using shop Id',()=>{
    test('Products from Shop Id',async()=>{
        jest.spyOn(Product,'find').mockResolvedValueOnce(allProducts)
        const res  = await request(app).get('/api/v2/product/get-all-products-shop/1')
        expect(res.statusCode).toBe(201)
    })
   })

   describe('delete vendor product Using Id',()=>{
    test('delete Products from Shop Id',async()=>{
        const verify = jest.fn().mockResolvedValueOnce(true)
        const findById = jest.fn().mockResolvedValueOnce(1)
        jest.spyOn(Product,'findById').mockResolvedValueOnce(null)
        const res  = await request(app).delete('/api/v2/product/delete-shop-product/1').set('Cookie','token=1234556')
        expect(res.statusCode).toBe(401)
    })
   })
})