import { useState } from "react"

const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const inputChange = ({ target }) => {
        setinputValue(target.value)

    }
    const onsubmit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length <=1){return}
        onNewCategory(inputValue.trim());
        setinputValue('');
    }
    return (
        <>
            <form  onSubmit={onsubmit}>
                <input type="text"
                    placeholder="Buscar gif"
                    value={inputValue}
                    onChange={inputChange}
                >
                </input>
            </form>
        </>
    )
}

export default AddCategory