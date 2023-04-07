import { collection, getFirestore, query, where } from "firebase/firestore";
import { getUsers } from "../../../firebase/usuarios"
import "./SidebarChatsItem.css"
import { useCollection } from "react-firebase-hooks/firestore"; 
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { usuariosCollection } from "../../../firebase/collections";
import { db } from "../../../firebase/config";
import { MdPerson } from "react-icons/md";


const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[0]?.split("@")[0];

export function SidebarChatsItem({ id, users, user, setUserChat, active }) {
  const usuarioLogado = useContext(AuthContext);

  const [getUserItem] = useCollection(
    query(collection(db, "users"), where("email", "==", getUser(users, user)))
  );

  const Avatar= getUserItem?.docs?.[0]?.data();
  const item = getUser(users, user);

  function handleNewChat (){
    const userChat = {
        chatId: id,
        name: item.split("@")[0],
        photoURL: Avatar?.photoURL ? Avatar.photoURL : '',
    };
    setUserChat(userChat);
  };




  return (
    <div className={`SidebarChatsItem`} onClick={handleNewChat}>
      {Avatar ? <img className="Avatar" src={Avatar.photoURL}/> : <MdPerson/>}
      <span className="Name">{item.split("@")[0]}</span>
      </div>
  );
}