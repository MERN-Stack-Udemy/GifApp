import { shallow } from 'enzyme'
import GifExpertApp from '../../GifExpertApp'

describe(' testing <GifExpertApp/> component', () => {
  
  test('should make match with de snapshot', () => {
    const wrapper = shallow( <GifExpertApp /> );
    expect( wrapper ).toMatchSnapshot();
  })
  
  test('should display a list of categories ', () => {
    const categories = ['One Punch', 'Dragon Ball'];
    const wrapper = shallow( <GifExpertApp defaultCategories={categories} /> );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifsGrid').length ).toBe( categories.length );
  })
  
})
