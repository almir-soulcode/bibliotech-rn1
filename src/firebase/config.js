
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxJoto6ifTPmTEjPAZmflFhbcQsCmeWcQ",
  authDomain: "bibliotech-ja.firebaseapp.com",
  projectId: "bibliotech-ja",
  storageBucket: "bibliotech-ja.appspot.com",
  messagingSenderId: "174756742189",
  appId: "1:174756742189:web:b9f6f471e86b1c37bfe4a4"
};


// Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
// Configurando o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);
// Configura o Firestore e seus recursos de banco de dados
export const db = getFirestore(app);
// Configura o Storage e seus recursos de Upload
export const storage = getStorage(app);