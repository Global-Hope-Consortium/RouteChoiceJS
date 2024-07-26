const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const getCrimeStatistics = async (location) => {
  try {
    const response = await axios.get(`https://crime-statistics-api.com/location=${location.lat},${location.lon}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching crime statistics:', error);
    return null;
  }
};

const calculateRoute = async (routeType, currentLocation) => {
  const crimeStats = await getCrimeStatistics(currentLocation);
  
  const route = {
    distance: 15,
    estimatedTime: 20,
    price: 10,
    safety: crimeStats && crimeStats.level > 5 ? 'Low' : 'High'
  };

  return route;
};

app.post('/api/route', async (req, res) => {
  const { routeType, currentLocation } = req.body;

  try {
    const route = await calculateRoute(routeType, currentLocation);
    res.json(route);
  } catch (error) {
    console.error('Error calculating route:', error);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});