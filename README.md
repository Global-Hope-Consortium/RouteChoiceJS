# RouteChoiceJS

This project is a prototype of a route choice feature designed to be incorporated with any GPS system and e-hailing services to enhance user experience.

## Introduction
The Route Choice Feature Project is designed to revolutionize navigation apps by introducing a comprehensive route choice feature. This feature enables users to select their preferred route based on various criteria such as time, cost, road safety, and traffic predictions. Our goal is to enhance rider satisfaction, optimize driver routes, and mitigate route-related disputes, setting a new industry standard for personalized travel experiences. Initially focusing on Gauteng, the technology is built for global scalability, ensuring adaptability to local conditions and preferences.

## Key Features
- **Route Selection**: Allows riders to choose between the fastest, shortest, or a driver-suggested route, incorporating traffic predictions for informed trip planning.
- **Real-time GPS Tracking**: Provides live tracking of rides through GPS integration.
- **Statistics Collection**: Gathers current crime statistics in the area to enhance safety considerations.
- **Pricing Algorithm**: Ensures fair and transparent fare calculations by adopting current transport service pricing.
- **Dispatches Out of Range**: Offers an option for riders to request dispatches beyond a 2km radius, with an additional fee, ensuring availability even when no drivers are nearby.
- **Integration with Crime Statistics**: Integrates with current crime statistics databases, allowing riders to make informed decisions based on safety.
- **Ratings & Preferences**: Implements a system where riders can set preferences (e.g., allowing vaping or making out in the car), which influences the rating system. This feature aims to match drivers with preferred riders, ensuring fair ratings and enhancing the ride experience for both parties.
- **Global Scalability**: Designed for global scalability, ensuring the feature can adapt to local conditions and statistics in different areas.

## Technology Stack
- **Backend**: JavaScript with Node.js and Express for RESTful API development.
- **Frontend**: JavaScript with React.js for the web client interface.
- **Database**: PostgreSQL for data storage and management, including tables for Routes, Fares, and User Preferences.
- **APIs**: Google Maps for routing and real-time traffic information, and local crime statistics databases for safety assessments.
- **Cloud Services**: AWS/GCP for hosting, real-time data processing, and scalability.
- **Tools**: Docker for containerization and Jenkins for continuous integration.

## Project Structure

RouteChoiceFeature/
├── backend/
│   ├── server.js
│   ├── apis.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── components/
│   │       ├── RouteDetails.js
│   │       └── MapComponent.js
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── .env
├── docker-compose.yml
└── README.md


## Getting Started

### Step 1: Set Up the Project Structure

Create a directory structure for the project as shown above.

### Step 2: Backend Setup

#### 2.1. `package.json` for Backend

Create a `package.json` file in the `backend` directory to manage dependencies.

#### 2.2. `server.js` for Backend

Create a `server.js` file in the `backend` directory.

#### 2.3. `.env` for Backend

Create a `.env` file in the `backend` directory to store environment variables.

### Step 3: Frontend Setup

#### 3.1. `package.json` for Frontend

Create a `package.json` file in the `frontend` directory to manage dependencies.

#### 3.2. `App.js` for Frontend

Create an `App.js` file in the `frontend/src` directory.

#### 3.3. `RouteDetails.js` for Frontend

Create a `RouteDetails.js` file in the `frontend/src/components` directory.

#### 3.4. `index.js` for Frontend

Create an `index.js` file in the `frontend/src` directory.

#### 3.5. `index.html` for Frontend

Create an `index.html` file in the `frontend/public` directory.

### Step 4: Docker Setup

Create a `docker-compose.yml` file in the root directory.

### Step 5: Error Handling

Ensure robust error handling in both frontend and backend. The backend already has basic error handling. For the frontend, ensure that errors are caught and displayed to the user.

### Step 6: Create a Zip File

To create a zip file, you can use the following command in your terminal:

```sh
zip -r RouteChoiceFeature.zip RouteChoiceFeature/

docker-compose up --build

