# Intro

Simple app to practice react and node.js

# Movie Listing App

This is a simple full-stack web application that allows you to list movies using a React front-end and a Node.js back-end. The front-end displays a list of movies fetched from the back-end API and renders them in a user-friendly format.

## Features

- Fetches movie data from a Node.js API
- Displays a list of movies with their title, year, and genre
- User-friendly and responsive design using Material-UI

## Tech Stack

The project utilizes the following technologies:

- Front-end:

  - React
  - TypeScript
  - Material-UI

- Back-end:
  - Node.js
  - Express.js
  - CORS (Cross-Origin Resource Sharing) for enabling API requests from the front-end

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rafaelsvs/online-marketplace.git

   ```

2. Navigate to the project's root directory:
   cd movie-listing-app

3. Install the dependencies for the front-end:
   cd client # Navigate to the front-end directory
   npm install # Install front-end dependencies

4. Install the dependencies for the back-end:
   cd ../server # Navigate to the back-end directory
   npm install # Install back-end dependencies

### Usage

1. Start the back-end server:
   cd server # Navigate to the back-end directory
   npm start # Start the back-end server

The back-end server will start running at http://localhost:3001.

2. Start the front-end development server:
   cd ../client # Navigate to the front-end directory
   npm start # Start the front-end development server

The front-end development server will start running at http://localhost:3000. Open this URL in your browser to access the Movie Listing App.

### Configuration

If you want to customize the configuration, such as API endpoints or other settings, you can modify the respective configuration files:

Front-end: client/src/config.js
Back-end: server/config.js
Make sure to restart the servers after making any configuration changes.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

Please note that the installation section now includes separate steps for installing the front-end and back-end dependencies, clarifying the process.
