import { shallow } from "enzyme"
import { GifsGridItem } from "../../components/GifsGridItem"


describe('Test about GifsGridItem', () => {
  
  const url = 'https://api.giphy.com/seach?rick+y+morty.jpg';
  const title = 'rick y morty';
  const wrapper = shallow(<GifsGridItem  url={url} title={title} />);
  
  test('test snapshot of GifsGritItem', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
  test('check title of <p/> text()', () => {
    const p_title = wrapper.find('p').text();
    expect( p_title ).toBe( title );
  })
  
  test('<img/> must contain the attributes: \'alt\' and \'src\'', () => {
    const img = wrapper.find('img');
    expect( img.prop('src') ).toBe( url );
    expect( img.prop('alt') ).toBe( title );
  })
  
  test('<div/> should contains the className: \'animate__bounceIn\' ', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect( className.includes('animate__bounceIn') ).toBe(true)
  })
  

})
