import {userEvent, fireEvent, render,screen} from '@testing-library/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cart from '../components/Login/Login'
const setup = () => {
  const utils = render(<Cart />)
  const input = screen.getByLabelText('email')
  const password = screen.getByLabelText('email')
  const button = screen.getByRole('button',{
    name:/Submit/i,
  })
  return {
    input,
    password,
    button,
    ...utils,
  }
}
jest.mock('react-router-dom',()=>({
  ...jest.requireActual('react-router-dom'),
  useNavigate:jest.fn(),
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  Link:(props)=><a data-testid="mocked-link" {...props}/>,
}));

const cart=[]
describe("cart flow test",()=>{
    it("adding products into cart",()=>{
        cart.push({
            name:'flower',
            price:1000
        },{
            NAME:"SNEAKERS",
            price:2000
        })

        const total = cart.reduce((acc,cur)=>{
             return acc =acc+cur.price;
        },0)
        expect(3000).toBe(total)
    })
})