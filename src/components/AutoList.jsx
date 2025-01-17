import React, { useState, useEffect } from 'react';
import { getAutos, deleteAuto } from '../api';
import { Container, List, ListItem, ListItemText, Button, Typography } from '@mui/material';
import AutoItem from './AutoItem';
import AutoForm from './AutoForm';

const AutoList = () => {
  const [autos, setAutos] = useState([]);
  const [selectedAuto, setSelectedAuto] = useState(null);

  useEffect(() => {
    fetchAutos();
  }, []);

  const fetchAutos = async () => {
    try {
      const response = await getAutos();
      setAutos(response.data.data);
    } catch (error) {
      console.error('Error fetching autos:', error);
    }
  };

  const handleDelete = async (id) => {
    await deleteAuto({ id });
    fetchAutos();
  };

  const handleEdit = (auto) => {
    setSelectedAuto(auto);
  };

  const handleSubmit = () => {
    fetchAutos();
    setSelectedAuto(null);
  };

  return (
    <Container>
      <AutoForm auto={selectedAuto} onSubmit={handleSubmit} />
      <Typography variant="h4" gutterBottom>Lista de Autos</Typography>
      <List>
        {autos.map((auto) => (
          <AutoItem key={auto.id} auto={auto} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </List>
    </Container>
  );
};

export default AutoList;
