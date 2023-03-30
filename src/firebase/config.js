import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Chaves de acesso ao firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3ldl83f4aSOpsvt0Sl6IBM7tcPYnVemk",
  authDomain: "bibliotech-aula-diego.firebaseapp.com",
  projectId: "bibliotech-aula-diego",
  storageBucket: "bibliotech-aula-diego.appspot.com",
  messagingSenderId: "1013908330223",
  appId: "1:1013908330223:web:3b7f5834bb52348c2d6d1a",

};

// Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
// Configurando o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);
// Configura o Firestore e seus recursos de banco de dados
export const db = getFirestore(app);
// Configura o Storage e seus recursos de Upload
export const storage = getStorage(app);



