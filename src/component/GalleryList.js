import React, {useState, useEffect} from 'react'
import {Image} from'cloudinary-react'
import Gallery from './Gallery'



const GalleryList = props => {
const [imageIds, setImageIds] =useState([])

const loadImages = async () =>{
    try{
        const res = await fetch('https://bigmike.herokuapp.com/api/images')
        const data = await res.json()
        console.log(data)
        setImageIds(data)
    } catch (error){

        console.error(error)
    }
}
useEffect(()=>{
 loadImages();
},[])


    return (
        <div>
            <h1>Gallery</h1>
            {imageIds && imageIds.map((imageId, index) =>(
                <Image style={{margin: '2%', paddingLeft: '8%'}}
                key={index}
                CloudName='dadsendoff'
                publicId={imageId}
                width='300'
                crop='scale'
                />
            ))}
            <Gallery key={imageIds.id} imageIds={imageIds} />
        </div>
    )
}



export default GalleryList
