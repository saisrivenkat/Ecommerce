import {userEvent, fireEvent, render,screen} from '@testing-library/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login/Login'
const setup = () => {
  const utils = render(<Login />)
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


describe("Test Login Component",()=>{
  test("Component",async()=>{
    const navigate=jest.fn();
    useNavigate.mockReturnValue(navigate)
    const {input,password,button} = setup()
    fireEvent.change(input, {target: {value: 'n.srisai1234@gmail.com'}})
    expect(input.value).toBe('n.srisai1234@gmail.com')
    fireEvent.change(password,{target:{value:'Srisai@1234'}})
    const LoginHeading = screen.getByText('Login to your account')
    expect(LoginHeading).toBeInTheDocument();
    //button.simulate('click');
    
    expect(global.window.location.pathname).toContain('/'); // we can check it is navigating to dash board
    


  })
})
