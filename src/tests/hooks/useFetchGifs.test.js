import { useFetchGifs } from "../../Hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Test on cunstom hook \'useFetchGifs\'', () => {
  
  test('should return initial state ', async () => {

    const { result, waitForNextUpdate } = renderHook ( () => useFetchGifs('One Punch') );
    const { data, loading } = result.current;
    
    await waitForNextUpdate();

    expect( data ).toEqual( [] );
    expect( loading ).toBe( true );

  });

  test('should to return a images array and loading is false', async () => {
    
    const { result, waitForNextUpdate } = renderHook ( () => useFetchGifs('One Punch') );
    
    await waitForNextUpdate();
    
    const { data, loading } = result.current;
    expect( data.length ).toEqual( 10 );
    expect( loading ).toBe( false );
  
  });
  
  
})
