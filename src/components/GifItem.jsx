

export const GifItem = ({ id , title, url}) => {
console.log(id);
console.log(url);
console.log(title);
   
  return (
    <div className="card">
    
   <img src={url} alt={title}></img>
   <p>{title}</p>
    
    </div>
  )
}
