import React from 'react';
import { ListItem, ListItemText, Button } from '@mui/material';

const AutoItem = ({ auto, onDelete, onEdit }) => {
  return (
    <ListItem>
      <ListItemText
        primary={auto.brand}
        secondary={`Modelo: ${auto.model} - Color: ${auto.color}`}
      />
      <Button variant="outlined" color="primary" onClick={() => onEdit(auto)}>
        Editar
      </Button>
      <Button variant="outlined" color="secondary" onClick={() => onDelete(auto.id)}>
        Eliminar
      </Button>
    </ListItem>
  );
};

export default AutoItem;
