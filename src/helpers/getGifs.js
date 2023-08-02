export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=4t0h5Qj038k8su0nE0TMP36OvAn1ndmb&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}