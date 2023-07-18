# ProjectAirlift
## Step-by-Step for downloading and running our app on your local machine


Requirements:
- Node.js and npm (Node Package Manager) should be installed on your machine. You can download them from the official Node.js website: https://nodejs.org.

<u>Clone the project</u>
- Open a terminal or command prompt.
- Clone the project repository by running the following command in a target folder:

```
git clone git@github.com:ASGili/ProjectAirlift.git
```

<u>Install dependencies from your terminal</u>
- Navigate to the project's root directory in the terminal.
- Install the required dependencies for the frontend:

```
cd ../frontend
npm install
```


<u>Start the backend and frontend</u>
- Navigate to the backend directory:

```
cd ../backend
```

- Compile backend:

Load into a chosen IDE and compile the backend. The AirliftApplication.java file is the runner for the backend.



- Navigate to the frontend directory:

```
cd ../frontend
```

- Run the following command to start React frontend:

```
npm start
```

<u> Accessing the app</u>
- Open a web browser and go to `http://localhost:3000`.
- You should see the React app running, connected to the Spring backend.
