import {
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    setDoc,
    updateDoc,
    where
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { usuariosCollection } from "./collections";
import { db, storage } from "./config"



export async function addUsuario(usuario) {
    const usuarioRef = doc(db, "usuarios", usuario.email);
    const usuarioDoc = await getDoc(usuarioRef);
    if (usuarioDoc.exists()) {
      // usuário já existe, atualiza os dados dele
      await setDoc(usuarioRef, usuario, { merge: true });
    } else {
      // usuário não existe, cria um novo registro
      await setDoc(usuarioRef, usuario);
    }
  }

export async function getUsers(users, userLogged){
    const q = query(usuariosCollection, where("email", "!=", userLogged));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));   
}