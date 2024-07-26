import React from 'react';

const RouteDetails = ({ route }) => {
  return (
    <div>
      <h2>Route Details</h2>
      <p>Distance: {route.distance} km</p>
      <p>Estimated Time: {route.estimatedTime} mins</p>
      <p>Price: ${route.price}</p>
      <p>Safety: {route.safety}</p>
    </div>
  );
};

export default RouteDetails;

