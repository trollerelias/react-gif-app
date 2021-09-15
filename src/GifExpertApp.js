
import React, { useState } from 'react'
import { AddCategory } from './components/addCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Dragon Ball'])

    //const handleAdd = () => {
    //    setCategorias(  [...categorias, 'HunterXHunter'] );
   //     
   // }



    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategorias={setCategorias}/>

            <hr/>

    

            <ol>


                { 
                    categorias.map( category => (
                        <GifGrid 
                            key={category}
                            category={ category }
                        />
                    ))
                }

            </ol>



        </>
    )
}
