import { shallow } from "enzyme"
import { GifsGridItem } from "../components/GifsGridItem"


describe('Test about GifsGridItem', () => {
  
  test('test snapshot of GifsGritItem', () => {
    const image= { url: 'holamundo'};
    const title = 'test demo'
    const wrapper = shallow(<GifsGridItem image={image} title={title}/>);
    expect(wrapper).toMatchSnapshot();
  })
  

})
