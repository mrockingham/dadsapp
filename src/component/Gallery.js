import React, {useState} from 'react';
import Title from '../component/Title'
import UploadForm from '../component/UploadForm'
import ImageGrid from '../component/ImageGrid'
import Modal from '../component/Modal'

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null)
    return (
        <div className="App">
            something
        <Title />
        <UploadForm/>
        <ImageGrid setSelectedImg={setSelectedImg}/>
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
      </div>
    )
}

export default Gallery
