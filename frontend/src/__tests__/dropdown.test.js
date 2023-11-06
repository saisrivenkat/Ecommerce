import Drop from '../components/Layout/DropDown';
import {findByText, render,waitFor} from '@testing-library/react'
import {screen} from '@testing-library/react'

const data=[
    {
        title:"applyMiddleware"
    },
    {
        title:"sneakers"
    }
]

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:jest.fn(),
    Link:(props)=><a data-testid="mocked-link" {...props}/>,
  }));
describe('testing the dropdown component',()=>{
    it('componenet testing',async()=>{
        render(<Drop categoriesData={data} setDropDown={true}/>)
        //expect(<h2>sneakers</h2>).toBeInTheDocument();
        expect(await screen.findByText('sneakers')).toBeInTheDocument()
    })
})
