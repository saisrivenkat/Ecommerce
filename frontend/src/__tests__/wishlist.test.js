import Wishlist from '../components/Wishlist/Wishlist';
import {render,screen} from '@testing-library/react'
import{useSelector} from 'react-redux';

jest.mock('react-redux',()=>({
    ...jest.requireActual('react-redux'),
    useSelector:jest.fn(),
    useDispatch:jest.fn(),
}))

describe("wishlist Component",()=>{
    it("component",()=>{
        useSelector.mockReturnValue({ wishlist:[] });
        render(<Wishlist/>)
        const text = screen.getByText('Wishlist Items is empty!');
        expect(text).toBeInTheDocument();


    })
    
})