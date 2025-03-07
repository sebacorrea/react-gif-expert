
import { GifItem } from './GifItem';
import { useFechGrid } from '../hooks/useFechGrid'



const GifGrid = ({ category }) => {

  const { imagenenes, loading } = useFechGrid(category);
  console.log(loading);
  /*
  const [imagenes, setimagenes] = useState([]);


  const getimagenes = async () => {
    const nuevasImagenes = await getGif(category);
    setimagenes(nuevasImagenes);
   // console.log(category);
    //console.log(imagenes);

  }


  useEffect(() => {
    getimagenes();
  }, [])

*/


  return (
    <>


      <h3>{category}</h3>
      {loading && (<h2>Cargando...</h2>)} 
      <div className='card-grid'>
        {

          imagenenes.map((img) =>

          (

            <GifItem key={img.id}
              {...img}>

            </GifItem>
          ))


        }
      </div>


    </>
  )
}

export default GifGrid