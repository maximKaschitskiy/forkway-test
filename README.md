# App README

This repository contains a test task app for the "Forkway" company.

## Description

The app is a Next.js application written in TypeScript and styled using `@emotion/styled`. It renders an elements tree based on a collection (an array of objects) provided in a mock file.

## Functionality

1.  The app renders an elements tree based on the collection.
2.  The elements in the tree are draggable, allowing users to change the tree structure.
3.  Parent elements cannot be added as children of themselves.
4.  If the search functionality is active, the draggable functionality is disabled.

## Running the App

To run the app locally, follow these steps:

1.  Install the required dependencies by running `npm i`.
2.  Build the app using `npm run build`.
3.  Start the app with `npm run start`.

## Running the App with Docker

Alternatively, you can use Docker to run the app. Follow these steps:

1.  Build the Docker image by running the following command:
       
    `docker build -t forkway-test .` 
    
2.  Run the Docker container with the following command:
    
    `docker run -p 3000:3000 forkway-test` 
   
This will build the Docker image and run the app, making it accessible at `http://localhost:3000`.

Feel free to explore the app and test its functionality!

For any questions or issues, please contact the app owner.