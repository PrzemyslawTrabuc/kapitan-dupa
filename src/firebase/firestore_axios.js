import axios from 'axios';

const players = axios.create({
    baseURL: 'https://firestore.googleapis.com/v1/projects/kapitan-dupa-48dbb/databases/(default)/documents/test'
  });

  export default players;