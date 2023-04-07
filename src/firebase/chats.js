import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { chatsCollection } from "./collections";
import { db, storage } from "./config";

export async function addChat(data, data2) {
    await addDoc(chatsCollection, {users: [data, data2]});
};

export async function getChats(user) {
    const q = query(collection(db, chatsCollection), where('users', 'array-contains', user.email));
    const querySnapshot = await getDocs(q);
    const chats = [];
    querySnapshot.forEach((doc) => {
        chats.push({ ...doc.data(), id: doc.id });
    });
    return chats;
}