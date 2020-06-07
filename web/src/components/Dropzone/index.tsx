import React, {useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { FiUpload } from 'react-icons/fi'

import './styles.css';

interface Props {
  onFileUpload: (file: File) => void;
}

const MyDropzone: React.FC<Props> = ({ onFileUpload }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    
    //console.log(acceptedFiles);

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUpload(file);
  }, [onFileUpload]);

  const {getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
        {
          selectedFileUrl ? 
          <img src={selectedFileUrl} alt="Point thumbnail" /> 
          : 
          (
            <p>
              <FiUpload />
              <span>Imagem da Entidade</span><br/>
              Arraste e solte arquivos aqui ou Clique para escolher os arquivos
            </p>
          )
        }
    </div>
  )
}

export default MyDropzone;