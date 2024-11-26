import axios from 'axios';

/*
    const API_KEY = import.meta.env.API_KEY;
    const API_BASE_URL = import.meta.env.API_URL;
    pendiente configurar las .env
*/

const API_BASE_URL = 'http://localhost/api';
const API_KEY = 'MVcc7aWOQ123456789MVcc7aWOQ';


const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-API-KEY': API_KEY,
    'Content-Type': 'application/json',
  },
});

export const fetchLocations = async () => {
  const response = await apiClient.get('/locations');
  return response.data;
};

/**
 * 
 * @returns datos de prueba
 */
export const fetchLocations_test = async () => {
    // Datos provisionales
    const data = [
      {
        code: '1',
        name: 'Sede Central 1',
        image: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
        creationDate: '2022-01-15',
      },
      {
        code: '2',
        name: 'Sede Central 2',
        image: 'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png',
        creationDate: '2023-01-15',
      },
      {
        code: '3',
        name: 'Sucursal Norte 1',
        image: 'https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg',
        creationDate: '2023-02-10',
      },
      {
        code: '4',
        name: 'Sucursal Norte 2',
        image: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
        creationDate: '2024-02-10',
      },
      {
        code: '5',
        name: 'Sucursal Sur 1',
        image: 'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png',
        creationDate: '2021-03-20',
      },
      {
        code: '6',
        name: 'Sucursal Sur 2',
        image: 'https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg',
        creationDate: '2022-03-20',
      },
    ];
  
    return data;
  };
  
