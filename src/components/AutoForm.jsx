import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Container } from '@mui/material';
import { createAuto, updateAuto } from '../api';

const AutoForm = ({ auto, onSubmit }) => {
  const [formData, setFormData] = useState({
    brand: '',
    npassengers: '',
    color: '',
    nengine: '',
    model: '',
  });

  useEffect(() => {
    if (auto) {
      setFormData(auto);
    }
  }, [auto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (auto) {
      await updateAuto(formData);
    } else {
      await createAuto(formData);
    }
    onSubmit();
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Marca"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Número de pasajeros"
              name="npassengers"
              value={formData.npassengers}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Número de motor"
              name="nengine"
              value={formData.nengine}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Modelo"
              name="model"
              value={formData.model}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth>
              {auto ? 'Actualizar' : 'Crear'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AutoForm;
