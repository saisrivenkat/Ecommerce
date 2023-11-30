import {userEvent, fireEvent, render,screen} from '@testing-library/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Register from '../components/Signup/Signup'
const setup = () => {
  const utils = render(<Register />)
  const input = screen.getByLabelText('email')
  const password = screen.getByLabelText('email')
  const button = screen.getByRole('button',{
    name:/Submit/i,
  })
  return {
    input,
    password,button,
    ...utils,
  }
}
jest.mock('react-router-dom',()=>({
  ...jest.requireActual('react-router-dom'),
  useNavigate:jest.fn(),
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  Link:(props)=><a data-testid="mocked-link" {...props}/>,
}));


describe("Test Register Flow",()=>{
  test("Register Flow",async()=>{
    const navigate=jest.fn();
    useNavigate.mockReturnValue(navigate)
    const {input,password,button} = setup()
    

    fireEvent.change(input, {target: {value: 'n.srisai1234@gmail.com'}})
    expect(input.value).toBe('n.srisai1234@gmail.com')
    fireEvent.change(password,{target:{value:'Srisai@1234'}})
    const LoginHeading = screen.getByText('Register as a new user')
    expect(LoginHeading).toBeInTheDocument();
    //button.simulate('click');
    
    expect(global.window.location.pathname).toContain('/'); // we can check it is navigating to dash board
    


  })
})
