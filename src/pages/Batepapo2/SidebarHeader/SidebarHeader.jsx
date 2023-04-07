import { useContext } from "react";
import "./SidebarHeader.css";
import { MdDonutLarge, MdChat, MdMoreVert, MdPerson } from "react-icons/md";
import { AuthContext } from "../../../contexts/AuthContext";
import { validate } from "react-email-validator";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useCollection } from "react-firebase-hooks/firestore";
import { addChat } from "../../../firebase/chats";
import { chatsCollection } from "../../../firebase/collections";

export function SidebarHeader(setUserChat) {
    const usuarioLogado = useContext(AuthContext);
    const refChat = query(collection(db, "chats"), where('users', 'array-contains', usuarioLogado.email));
    const [chatsSnapshot] = useCollection(refChat);

    function handleCreateChat() {
        const emailInput = prompt("Escreva o e-mail desejado");

        if (!emailInput) return;

        if (!validate(emailInput)) {
            return alert("E-mail inválido!");
        } else if (emailInput === usuarioLogado.email) {
            return alert("Insira um e-mail diferente do seu!");
        } else if (chatExists(emailInput)) {
            return alert("Chat já existe!");
        }
        addChat(usuarioLogado.email, emailInput);
    }

    const chatExists = (emailChat) => {
        return !!chatsSnapshot?.docs.find(
            (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
        );
    };


    return (
        <div className="SidebarHeader">
                {usuarioLogado.photoURL? <img id="Avatar" src={usuarioLogado?.photoURL}/> : <MdPerson id="Avatar" />}

            <div id="OptionsHeader">
                <MdDonutLarge />
                <MdChat onClick={handleCreateChat} />
                <MdMoreVert />
            </div>
        </div>
    )
}