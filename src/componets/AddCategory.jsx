import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChanged = ({target}) => {
    setInputValue(target.value);
  
  }

  const onSubmitChanged = (e) =>
  {
    e.preventDefault();
 
   if(inputValue.trim().length <= 1) return;
   setInputValue('');
   onNewCategory(inputValue.trim());
  }



  return (
    <form onSubmit={onSubmitChanged}>
        <input 
            type="text" 
            placeholder="Buscar Gifs" 
            value={inputValue} 
            onChange={ onInputChanged} />
    </form>
  )
}
