// Positive test case
import {getByLabelText, getByPlaceholderText, render,screen} from '@testing-library/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Layout/Header'
import { useSelector } from "react-redux";

jest.mock('react-router-dom',()=>({
  ...jest.requireActual('react-router-dom'),
  useNavigate:jest.fn(),
  Link:(props)=><a data-testid="mocked-link" {...props}/>,
}));

jest.mock('react-redux',()=>({
    ...jest.requireActual('react-redux'),
    useSelector:jest.fn(),
}))

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

const cart=[
  {name:'123',price:"200"},
  {name:'123',price:"200"},
  {name:'123',price:"200"}
]

describe("Test Header Component",()=>{
  test("Component",()=>{

    const navigate=jest.fn();
    
    useNavigate.mockReturnValue(navigate)
    useSelector.mockReturnValue({ user: { avatar: { url: "https://www.procart.us/uploads/1/3/0/8/130819476/pc-photoshop-800-logo-b_orig.png" } } });
    useSelector.mockReturnValue({ cart });
    render(<Header/>)
    const LoginHeading = screen.getByText('Become Seller')
    expect(LoginHeading).toBeInTheDocument();

  })
})

