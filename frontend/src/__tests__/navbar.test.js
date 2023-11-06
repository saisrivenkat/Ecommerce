
import Navbar from '../components/Layout/Navbar';
import {render,screen} from '@testing-library/react'
const dummyData=[
    {name:'Computers and Laptops',img:'https://laptopscreens.com/1.img'}
]
jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:jest.fn(),
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    Link:(props)=><a data-testid="mocked-link" {...props}/>,
  }));
  
describe("Navbar test component",()=>{
    it("test component",()=>{
        render(<Navbar/>)
        const text =  screen.getByText('Best Selling')
        expect(text).toBeInTheDocument();
    })
})