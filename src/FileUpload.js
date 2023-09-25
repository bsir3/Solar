import React from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';

const FileUpload = ({ onUpload }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.csv, application/json',
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result;
          let parsedData;
          if (file.type === 'application/json') {
            parsedData = JSON.parse(result);
          } else {
            parsedData = Papa.parse(result, { header: true }).data;
          }
          onUpload(parsedData);
        };
        reader.readAsText(file);
      });
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
};

export default FileUpload;
