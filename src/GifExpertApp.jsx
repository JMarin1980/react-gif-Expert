import { useState } from 'react';
import { AddCategory, GifGrid } from './componets';
export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

   const onAddCategory = (newCategory) => {
      // setCategories( [...categories, 'Daemon Slayer'] );
      // setCategories( (cat) => [...cat, 'Daemon Slayer'] );
      // console.log(newCategory);
       if(categories.includes(newCategory)) return;
       setCategories( (cat) => [newCategory, ...cat] );
   }

  return (
    <>

        <h1>GifExpert App</h1>
        
        <AddCategory 
        // setCategories={setCategories} 
          onNewCategory = { onAddCategory }
        />
            {categories.map(category => {
                return <GifGrid 
                  key={category} 
                  category={category} />
            })}
     </>
  );
}


// nrfS2ylXFT2Wkn01RO3OenWI6xzBf2oZ