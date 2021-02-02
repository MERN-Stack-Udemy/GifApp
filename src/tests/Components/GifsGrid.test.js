import { shallow } from 'enzyme'
import { GifsGrid } from '../../components/GifsGrid'
import { useFetchGifs } from '../../Hooks/useFetchGifs';
jest.mock('../../Hooks/useFetchGifs')

describe('Test on <GifsGrid {category}/> ', () => {
  
  const category = 'One Punch';
  
  test('should to make match with snapshot component', () => {
    
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    
    const wrapper = shallow( <GifsGrid category={category} /> );
    expect( wrapper ).toMatchSnapshot();
  })
  
  test('should displayed items when useFechGifs data loaded', () => {
    
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost:3000/cualquier/imagen.gif',
      title: 'una imagen cualquiera'
    },
    {
      id: 'ABC',
      url: 'https://localhost:3000/cualquier/imagen.gif',
      title: 'una imagen cualquiera'
    },{
      id: 'ABC',
      url: 'https://localhost:3000/cualquier/imagen.gif',
      title: 'una imagen cualquiera'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow( <GifsGrid category={category} /> );
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifsGridItem').length ).toBe(gifs.length);
  })
  
})
