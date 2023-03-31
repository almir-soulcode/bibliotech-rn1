import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Chaves de acesso ao firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9PtToRG0DDb1AWnaWLaKjdzE7fPAvpNU",
  authDomain: "bibliotech-caio-dias.firebaseapp.com",
  projectId: "bibliotech-caio-dias",
  storageBucket: "bibliotech-caio-dias.appspot.com",
  messagingSenderId: "170013510651",
  appId: "1:170013510651:web:b286dc51d54818a6f8195e"
};

// Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
// Configurando o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);
// Configura o Firestore e seus recursos de banco de dados
export const db = getFirestore(app);
// Configura o Storage e seus recursos de Upload
export const storage = getStorage(app);
