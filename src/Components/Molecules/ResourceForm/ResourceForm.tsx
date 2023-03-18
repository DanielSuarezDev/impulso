// src/components/ResourceForm.tsx

import React, { useState, useContext } from 'react';
import { ResourceContext } from '../../../Context/Resource/ResourceContext';
import { Label } from './styles';

const ResourceForm = () => {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('Gatis');
  const [description, setDescription] = useState('');
  const [googleDriveLink, setGoogleDriveLink] = useState('');
  const { addResource } = useContext(ResourceContext);
  const [imageFile, setImageFile] = useState<any | null>(null);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (imageFile) {
      await addResource(title,tag, description, imageFile, googleDriveLink);
      setTitle('');
      setTag('');
      setDescription('');
      setImageFile(null);
      setGoogleDriveLink('');
    } else {
      alert('Por favor, selecciona una imagen.');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  

  return (
    <div>
      <h2>Agregar un recurso</h2>
      <form onSubmit={handleSubmit}>
        <Label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Label>
        <br />
        <Label>
          Tag:
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            required
          />
        </Label>
        <br />
        <Label>
          Descripción (Markdown):
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Label>
        <br />
        <Label>
        Imagen:
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </Label>
        <br />
        <Label>
          Enlace de Google Drive:
          <input
            type="url"
            value={googleDriveLink}
            onChange={(e) => setGoogleDriveLink(e.target.value)}
            required
          />
        </Label>
        <br />
        <button type="submit">Agregar recurso</button>
      </form>
    </div>
  );
};

export default ResourceForm;
