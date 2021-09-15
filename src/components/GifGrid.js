import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/GetGifss';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setimages] = useState([]);

    useEffect( () => {
        getGifs(category)
            .then( setimages)
    }, [ category ] )


  

    //getGifs()

    return (
        <>
            <h3>{category}</h3>

            <div className='card-grid'>
           
                {
                    images.map( img => (
                        <GifGridItem
                        key = {img.id}
                        {...img}  />
                    ))
                }
        
            
        </div>
        </>
    )
}
