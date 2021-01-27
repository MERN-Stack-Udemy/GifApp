export const getGifs = async (categorie) => {
    
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorie)}&limit=10&api_key=Wesx83VgWYMxRB57tCmyW4SvjO0wXj28`;
  const resp = await fetch( url );
  const { data } = await resp.json();
  
  const gifs = data.map( gifData => {
    return {
      id : gifData.id,
      url : gifData.images.downsized_medium.url,
      title : gifData.title
    }
  })
  return gifs;
}