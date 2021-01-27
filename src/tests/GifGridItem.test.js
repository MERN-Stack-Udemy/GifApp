import { shallow } from "enzyme"
import { GifsGridItem } from "../components/GifsGridItem"


describe('Test about GifsGridItem', () => {
  
  test('test snapshot of GifsGritItem', () => {
    const url = 'holamundo';
    const title = 'test demo'
    // 
    const wrapper = shallow(<GifsGridItem  url={url} title={title} />);
    expect(wrapper).toMatchSnapshot();
  })
  

})
