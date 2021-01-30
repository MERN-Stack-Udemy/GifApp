import { shallow } from "enzyme"
import { AddCategorie } from "../../components/AddCategorie"

describe('Test on <AddCategory /> component', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategorie setCategories = { setCategories} />)
  
  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategorie setCategories = { setCategories} />)
  })

  test('should test component to match snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  })
  
  test('should change input box value', () => {
    const input = wrapper.find('input');
    const value = 'hello world';

    input.simulate('change', { target:{ value }} );
    expect( wrapper.find('p').text() ).toBe( value );
  })
  
  test('input information should not be displayed when \'submit\' successfully', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect( setCategories ).not.toHaveBeenCalled();
  })

  test('should call to setCategories() and clean input box', () => {
    const value =  'shi-ka-ka!!!';
    wrapper.find('input').simulate('change', {target : { value }});
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect( setCategories ).toHaveBeenCalledTimes(1);
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
    expect( wrapper.find('input').prop('value') ).toBe('');
  });

  
})
