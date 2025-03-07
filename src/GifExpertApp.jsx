import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


function GifExpertApp() {
    const [category, setcategory] = useState(['One Punch']);

    const addCategory=(cat)=>{

        if(category.includes(cat))return;
        setcategory([...category, cat])
    }
    return (
        <>
            <h1>Gif expert app</h1>
            <AddCategory onNewCategory={addCategory}></AddCategory>
            <button onClick={addCategory}>AddCategory</button>
           
                {category.map(cat => 
                     
                     <GifGrid key={cat} category={cat}></GifGrid>
                )}

           
        </>
    )
}

export default GifExpertApp