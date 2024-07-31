import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

const Gallery = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await axios.get('/v2/list?page=1&limit=20');
        setImages(response.data);
        console.log(response.data)
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <div>
        {images.map(image => (
          <img key={image.id} src={image.download_url} alt={image.author} />
        ))}
      </div>
      <button onClick={getImages}>Fetch Images</button>
    </div>
  );
};

export default Gallery;
