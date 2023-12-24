# About this project

This project is aboud building a classic to-do list application inspired by https://todomvc.com/. 

<img src="./frontend/design/demo-1.png" width="500" />

# Backend

The backend of this project is in the `backend` folder. It is implemented with Node.js and Express.js. The database is MongoDB.

To run the backend, you need to navigate to the `backend` folder first, and follow the following steps:

1. install all the dependencies by running `npm install`
2. configure your MongoDB database, and copy/paste the connection string into the `.env` file. In other words, you need to replace the `ATLAS_URI` value with your own connection string. When doing so, please make sure that you have replaced the `<username>` and `<password>` part with your own.
3. start the backend by runnning `npm start`.

# Frontend

The frontend of this project is in the `frontend` folder. Before you run the frontend, please make sure that you have started the backend first. The backend should run without issues on port 8000.

To run the frontend, you can start the project with `npm start`.

To test the frontend, you can run `npm test`.

