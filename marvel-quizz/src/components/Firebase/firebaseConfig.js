import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration

export const config = {
  apiKey: "AIzaSyAntsvvlUzMBp7y9ZkX4fqPoiCLXIDyWrc",

  authDomain: "projet-quiz-marvel.firebaseapp.com",

  projectId: "projet-quiz-marvel",

  storageBucket: "projet-quiz-marvel.appspot.com",

  messagingSenderId: "1056049688092",

  appId: "1:1056049688092:web:6d3f629379a83d692039d9",
};

const app = initializeApp(config);

export const auth = getAuth(app);
