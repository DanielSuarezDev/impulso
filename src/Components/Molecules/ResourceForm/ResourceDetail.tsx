// src/components/ResourceDetail.tsx

import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ResourceContext, Resource } from '../../../Context/Resource/ResourceContext';
import { Button, Container, GoBack, Text, Title } from './styles';
import { Back } from '../../../assets';

const ResourceDetail = () => {
  const { id } = useParams<{ id: any }>();
  const { getResource } = useContext(ResourceContext);
  const [resource, setResource] = useState<Resource | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const resourceData = await getResource(id);
      setResource(resourceData);
    };
    fetchData();
  }, [id]);

  if (!resource) {
    return <div>Cargando...</div>;
  }

  return (
    <Container>
      <GoBack to="/recursos">
        <Back />
        </GoBack>
      <Title>{resource.title}</Title>
      <img src={resource.imageURL} alt={resource.title} width="200" />
      <Text>{resource.description}</Text>
        <Button href={resource.googleDriveLink} target="_blank" rel="noreferrer">
          Descargar Este material
        </Button>
    </Container>
  );
};

export default ResourceDetail;
