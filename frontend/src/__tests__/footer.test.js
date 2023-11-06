// Positive test case
import {getByLabelText, getByPlaceholderText, render,screen} from '@testing-library/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Layout/Footer'

jest.mock('react-router-dom',()=>({
  ...jest.requireActual('react-router-dom'),
  useNavigate:jest.fn(),
  Link:(props)=><a data-testid="mocked-link" {...props}/>,
}));

jest.mock('react-redux',()=>({
    ...jest.requireActual('react-redux'),
    useSelector:jest.fn(),
}))

describe("Test Login Component",()=>{
  test("Component",()=>{

    const navigate=jest.fn();
    
    useNavigate.mockReturnValue(navigate)
    render(<Footer/>)
   
    const LoginHeading = screen.getByText('The home and elements needeed to create beatiful products.')
    expect(LoginHeading).toBeInTheDocument();

  })
})
