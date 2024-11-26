import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress, Typography } from '@mui/material';
import LocationCard from './LocationCard';
import { fetchLocations } from '../services/api';

interface Location {
  code: string;
  name: string;
  image: string;
  creationDate: string;
}

const LocationList: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getLocations = async () => {
      try {
        const data = await fetchLocations();
        setLocations(data);
      } catch (error) {
        console.error('Error http en la consulta:', error);
      } finally {
        setLoading(false);
      }
    };
    getLocations();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (!locations.length) {
    return <Typography variant="h6">No hay resultados.</Typography>;
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      {locations.map((location) => (
        <Grid item key={location.code}>
          <LocationCard {...location} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LocationList;
