import './App.css'
import { Container, Typography } from '@mui/material';
import LocationList from './components/LocationList';

function App() {

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Sedes
      </Typography>
      <LocationList />
    </Container>
  );
}

export default App
