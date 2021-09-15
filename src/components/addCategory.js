import React, { useState } from 'react';
import Proptypes from 'prop-types';



export const AddCategory = ( {setCategorias} ) => {
    
    const [inputValue, setinputValue] = useState('Anadir nuevo')    
    
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategorias( cats => [inputValue, ...cats ]);
            setinputValue('');
        }

        
    }


    return (

        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange }
            />
        </form> 
    )
}

AddCategory.propTypes = {
    setCategorias: Proptypes.func.isRequired
}