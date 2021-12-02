import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export const MyDropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className='dropzone' {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="dropzone__image">
        <i class='fas fa-cloud-download-alt'></i>
      </div>
      <p className="dropzone__text">Click or drag image file to this area to upload</p>
    </div>
  );
};
