import { deleteDoc, getDoc, getDocs, updateDoc, doc, addDoc } from "firebase/firestore";
import { authorsCollection } from "./collections";

export async function getAuthors(){
    const snapshot = await getDocs(authorsCollection);
    let authors = [];
    snapshot.forEach(doc => {
        authors.push({...doc.data(), id: doc.id});
    });
    return authors;
}

export async function addAuthor(data) {
    await addDoc(authorsCollection, data);
}

export async function getAuthor(id) {
    const document = await getDoc(doc(authorsCollection, id));
    return {...document.data(), id: document.id};
}


export async function updateAuthor(id, data) {
    await updateDoc(doc(authorsCollection, id), data);
}

export async function deleteAuthor(id) {
    await deleteDoc(doc(authorsCollection, id));
}
