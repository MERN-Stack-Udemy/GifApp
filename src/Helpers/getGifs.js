export const getGifs = async (categorie) => {
    
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categorie )  }&limit=10&api_key=Wesx83VgWYMxRB57tCmyW4SvjO0wXj28`;
  const resp = await fetch( url );
  const { data } = await resp.json();
  
  const gifs = data.map( gifData => {
    return {
      id : gifData.id,
      image : gifData.images.downsized_medium,
      title : gifData.title
    }
  })
  return gifs;
}