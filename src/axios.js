import axios from "axios";


// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://coresurveymvc.appspot.com/api'
  });
  
  // Alter defaults after instance has been created
  instance.defaults.headers.common['Authorization'] ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvem1lbmV5dXA2MEBnbWFpbC5jb20iLCJqdGkiOiIzODNmMzllMC03YTQ1LTRkNDAtYjY5Ny1kZGMwZmU4YjJlNDYiLCJuYmYiOjE1OTk0MDg3MjAsImV4cCI6MTYwMjAwMDcyMCwiaXNzIjoiaHR0cHM6Ly9jb3Jlc3VydmV5YXBpLmFwcHNwb3QuY29tLyIsImF1ZCI6Imh0dHBzOi8vY29yZXN1cnZleWFwaS5hcHBzcG90LmNvbS8ifQ.pXZLj9AUkejFHxWUF8JAFmHf4k6veZ5c-bfvARtUwGc"
  instance.defaults.headers['Accept']="application/json"
  instance.defaults.headers['Content-Type']="application/json"
  export default instance;