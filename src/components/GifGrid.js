import React from 'react';
import {CardColumns, Spinner} from 'react-bootstrap';
import '../index.css';


import {useFetchGifs} from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid =  ({category}) => {  
    const {data: images, loading} = useFetchGifs(category);  

    return (
        <>
            <h3 className="title animate__animated animate__bounce">{category}</h3>
            {
                loading ? <>
                            <Spinner animation="border" role="status"/>
                            <span className="animate__animated animate__flash"> Cargando...</span>
                          </>
                        : <CardColumns className="card-grid animate__animated animate__fadeIn">    
                                {
                                    images.map((img) => (
                                        <GifGridItem 
                                            key={img.id}
                                            {...img}
                                        />
                                    ))
                                } 
                            </CardColumns>  
                        
            }
               
            
        </>
       
    )
       
}

export default GifGrid;