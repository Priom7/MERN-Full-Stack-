import React, { useEffect, useState } from "react";
import { useHttpClient } from "../hooks/http-hook";
import "./Gallery.css";
function Gallery({ uploaded }) {
  const [images, setImages] = useState([]);
  const {
    isLoading,
    isError,
    sendRequest,
    clearError,
  } = useHttpClient();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/galleries`
        );

        setImages(responseData.galleries);
      } catch (err) {}
    };
    fetchImages();
  }, [sendRequest, uploaded]);

  return (
    <div className='gallery'>
      {isLoading && (
        <span>Loading Data please wait...</span>
      )}
      {isError && (
        <span onClick={clearError}>Error : {isError}</span>
      )}
      {!isLoading &&
        images &&
        images.map((image) => (
          <img
            alt='item'
            className='gallery__images'
            key={image.id}
            src={`${process.env.REACT_APP_ASSET_URL}/${image.image}`}
          ></img>
        ))}
    </div>
  );
}

export default Gallery;
