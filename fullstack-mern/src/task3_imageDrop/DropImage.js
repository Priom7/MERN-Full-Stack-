import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./DropImage.css";
import Gallery from "./Gallery";
const DropImage = () => {
  const [files, setFiles] = useState([]);
  const [uploaded, setUploaded] = useState(false);

  const {
    getRootProps,
    getInputProps,
    fileRejections,
  } = useDropzone({
    maxSize: 500000,
    maxFiles: 1,
    multiple: false,
    accept: "image/jpeg, image/png, image/jpg",
    onDrop: async (acceptedFiles) => {
      // Can be modified if multiple files needed to be uploaded at the same time
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      try {
        let formData = new FormData();
        formData.append("image", acceptedFiles[0]);

        await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/galleries`,
          {
            method: "POST",
            body: formData,
          }
        );
        setUploaded(true);
        setFiles([]);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const fileRejectionItems = fileRejections.map(
    ({ file, errors }) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    )
  );

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <h4>File Name : </h4>
        <span>{file.name}</span>
        <h4>File Size : </h4>
        <span>{file.size}</span>
        <h4>File Type : </h4>
        <span>{file.type}</span>
      </div>

      <div>
        <img
          src={file.preview}
          style={{ width: "200px" }}
          alt='preview'
        />
      </div>
    </div>
  ));

  return (
    <div className='dropImage'>
      <div className='dropImage__limitation'>
        <ul>
          Expected File Type:
          <li>image.png</li>
          <li>image.jpg</li>
          <li>image.jpeg</li>
        </ul>
        <ul>
          Expected File Limit:
          <li>Size : 500000bytes / 500Kb</li>
          <li>Number of File : 1</li>
        </ul>
      </div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p className='dropImage__title'>Drop files here</p>
      </div>
      <div>{images}</div>
      <div className='rejectStyle'>
        <ul>{fileRejectionItems}</ul>
      </div>
      <h1>Image Gallery</h1>
      <Gallery uploaded={uploaded}></Gallery>
    </div>
  );
};

export default DropImage;
