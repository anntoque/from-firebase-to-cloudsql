import * as functions from 'firebase-functions';

const REGION = 'asia-northeast1';

export const helloWorld = functions
  .region(REGION)
  .https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
  });