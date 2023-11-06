import { screen,render } from "@testing-library/react";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:jest.fn(),
    Link:(props)=><a data-testid="mocked-link" {...props}/>,
  }));
describe('Testing of Admin sidebar',()=>{
    it('test component',()=>{
        render(<AdminSideBar active={true}/>)
        const text =  screen.getByText('Dashboard')
        expect(text).toBeInTheDocument();
    })
})