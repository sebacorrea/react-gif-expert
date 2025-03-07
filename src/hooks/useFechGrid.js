import { useState,useEffect } from "react";
import { getGif } from '../helpers/getGif';

export const useFechGrid = (category) => {
 

    const [imagenes, setimagenes] = useState([]);
    const [loading, setLoading] = useState(true)


    const getimagenes = async () => {
      const nuevasImagenes = await getGif(category);
      setimagenes(nuevasImagenes);
      setLoading(false)
     // console.log(category);
      //console.log(imagenes);
  
    }
  
  
    useEffect(() => {
      getimagenes();
    }, [])
  

    return {
        imagenenes:imagenes,
        loading:loading,
    }
}
