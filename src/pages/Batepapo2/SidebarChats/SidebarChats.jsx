import { useContext } from "react"
import "./SidebarChats.css"
import { AuthContext } from "../../../contexts/AuthContext"
import { collection, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useCollection } from "react-firebase-hooks/firestore";
import { SidebarChatsItem } from "../SidebarChatsItem/SidebarChatsItem";

export function SidebarChats({setUserChat, userChat}) {

    const usuarioLogado = useContext(AuthContext);

    const refChat = query(collection(db, "chats"), where('users', 'array-contains', usuarioLogado.email));

    const [chatsSnapshot] = useCollection(refChat);

    return (
        <div className="SidebarChats">
            {chatsSnapshot?.docs.map((item, index) => (
                <div className="content" key={index}>
                    <SidebarChatsItem
                    id={item.id}
                    users={item.data().users}
                    user={usuarioLogado}
                    setUserChat={setUserChat}
                    active={userChat?.chatId === item.id ? "active" : ""}/>
                    <div className="divider"></div>
                </div>

            ))}
        </div>
    )
}