import { shallow } from "enzyme"
import { AddCategorie } from "../../components/AddCategorie"

describe('Test on <AddCategory /> component', () => {

  const setCategories = () => {};
  const wrapper = shallow(<AddCategorie setCategories = { setCategories} />)
  
  test('should test component to match snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  })
  
  test('should change input box value', () => {
    const input = wrapper.find('input');
    const value = 'hello world';

    input.simulate('change', { target:{ value }} );
    expect( wrapper.find('p').text() ).toBe( value );
  })
  


})
