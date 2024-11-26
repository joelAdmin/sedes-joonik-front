import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface LocationCardProps {
  code: string;
  name: string;
  image: string;
  creationDate: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ code, name, image, creationDate }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Code: {code}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created: {new Date(creationDate).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
