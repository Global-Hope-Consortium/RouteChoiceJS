const axios = require('axios');

const getRouteFromGoogleMaps = async (origin, destination) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching route from Google Maps:', error);
    throw error;
  }
};

