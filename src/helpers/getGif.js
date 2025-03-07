export const getGif=async (category)=>{

     const url=`https://api.giphy.com/v1/gifs/trending?api_key=k8N74iOLPg1h4y94BE4PsMdV1aSlHumO&q=${category}&limit=10`;
        const respuesta= await fetch(url);
        //desestructuro data
        const {data}=await respuesta.json()
       // console.log(data);
        const imagenes=data.map(img =>({
          id:img.id,
          title:img.title,
          url:img.images.downsized_medium.url
        }) 
        )
     return imagenes;

    }