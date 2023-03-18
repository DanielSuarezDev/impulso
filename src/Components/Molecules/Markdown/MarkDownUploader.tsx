// src/components/MarkdownUploader.tsx

import React, { useContext, useState } from 'react';
import { BlogContext } from '../../../Context/Blog/BlogContext';

const MarkdownUploader = () => {
  const { addPost } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');

  const handleFileRead = (event: ProgressEvent<FileReader>) => {
    const content = event.target?.result;
    if (typeof content === 'string') {
      addPost(title,tag, content);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (title.trim() === '') {
        alert('Por favor, ingrese un título para la entrada del blog');
        return;
      }
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(files[0]);
    }
  };

  return (
    <div>
         <input
        type="text"
        placeholder="Título de la entrada"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
         <input
        type="text"
        placeholder="Tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <input
        type="file"
        accept=".md"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default MarkdownUploader;
