import { useContext, useEffect, useState } from "react";
import "./Batepapo2.css";
import { AuthContext } from "../../contexts/AuthContext";
import { addUsuario } from "../../firebase/usuarios";
import { Sidebar } from "./Sidebar/Siderbar";
import { getChats } from "../../firebase/chats";
import { Chat } from "./Chat/Chat";

export function Batepapo2(){
    const [userChat, setUserChat] = useState(null);


    return (
        <div className="batepapo2">
            <div className="container-sideBar">
            <Sidebar setUserChat={setUserChat} userChat={userChat}/>
            <Chat userChat={userChat}/>
            </div>
        </div>
    )
}