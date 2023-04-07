import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Chaves de acesso ao firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSnmmrLqN_pT7bYtayxLoNLu6Ru_FlVc4",
  authDomain: "bibliotech-7.firebaseapp.com",
  projectId: "bibliotech-7",
  storageBucket: "bibliotech-7.appspot.com",
  messagingSenderId: "603283426456",
  appId: "1:603283426456:web:f0cfc95c88a3c8605354ed"
};

// Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
// Configurando o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);
// Configura o Firestore e seus recursos de banco de dados
export const db = getFirestore(app);
// Configura o Storage e seus recursos de Upload
export const storage = getStorage(app);
