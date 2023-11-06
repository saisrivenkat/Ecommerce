import {userEvent, fireEvent, render,screen} from '@testing-library/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Register from '../components/Signup/Signup'
const setup = () => {
  const utils = render(<Register />)
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


describe("Test Register Component",()=>{
  test("Component",async()=>{
    const navigate=jest.fn();
    useNavigate.mockReturnValue(navigate)
    const {input} = setup()
    fireEvent.change(input, {target: {value: 'test1@gmail.com'}})
    expect(input.value).toBe('test1@gmail.com')
    const LoginHeading = screen.getByText('Register as a new user')
    expect(LoginHeading).toBeInTheDocument();


  })
})
