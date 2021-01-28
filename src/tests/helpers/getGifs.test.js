import { getGifs } from '../../Helpers/getGifs';

describe(" test on getGifs Fetch", () => {
  
  test('should return an array length equal to 10', async () => {
    const imgs = await getGifs('One Punch');
    expect( imgs.length ).toBe( 10 );
  });
  
  test('should return an array length equal to 0 or [] empty array', async () => {
    const imgs = await getGifs('');
    expect( imgs.length ).toBe( 0 );
  });

});
