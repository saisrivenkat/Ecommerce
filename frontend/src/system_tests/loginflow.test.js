import {userEvent, fireEvent, render,screen} from '@testing-library/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login/Login'
const setup = () => {
  const utils = render(<Login />)
  const input = screen.getByLabelText('email')
  return {
    input,
    ...utils,
  }
}
jest.mock('react-router-dom',()=>({
  ...jest.requireActual('react-router-dom'),
  useNavigate:jest.fn(),
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  Link:(props)=><a data-testid="mocked-link" {...props}/>,
}));


describe("Test Login Component",()=>{
  test("Component",async()=>{
    const navigate=jest.fn();
    useNavigate.mockReturnValue(navigate)
    const {input} = setup()
    fireEvent.change(input, {target: {value: 'test1@gmail.com'}})
    expect(input.value).toBe('test1@gmail.com')
    const LoginHeading = screen.getByText('Login to your account')
    expect(LoginHeading).toBeInTheDocument();
    


  })
})
