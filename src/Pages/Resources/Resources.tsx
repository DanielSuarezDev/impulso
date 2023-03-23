import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';

import ResourceForm from '../../Components/Molecules/ResourceForm/ResourceForm';
import { ResourceContext, Resource } from '../../Context/Resource/ResourceContext';
import { Container } from './styles';
import { useAuth } from '../../Context/Auth/AuthContext';
import Card from '../../Components/Organisms/CardResources/CardResources';

const ResourceList = () => {
  const { resources, getResources } = useContext(ResourceContext);
  const { userConfig } = useAuth();

  useEffect(() => {
    getResources();
  }, []);
  
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
    }}>
      {userConfig?.email === 'danielsuarez3114@gmail.com' && <ResourceForm />}
      <h2>Lista de recursos</h2>
      {resources.map((resource: Resource) => (
        <Card
        key={resource.id}
        imageUrl={resource.imageURL}
        badgeText={resource.tag || 'Gatis'}
        title={resource.title}
        to={`/recursos/${resource.id}`}
      />
      ))}
    </div>
  );
};

export default ResourceList;
