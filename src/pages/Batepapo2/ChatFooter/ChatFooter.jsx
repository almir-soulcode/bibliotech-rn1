import { useContext, useState } from "react";
import "./ChatFooter.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { MdSend } from "react-icons/md";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { chatsCollection, messagesCollection } from "../../../firebase/collections";

export function ChatFooter({ chatId }) {

    const usuarioLogado = useContext(AuthContext);
    const [message, setMessage] = useState("");

    const handleSendMessage = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, "chats", chatId, "messages"), {
            message: message,
            user: usuarioLogado.email,
            photoURL: usuarioLogado.photoURL,
            uid: usuarioLogado.uid,
            timestamp: serverTimestamp(),
        });

        setMessage("");
    };


    return (
        <div className="ChatFooter">
            <form onSubmit={handleSendMessage} className="FormChatFooter">
                <input
                    type="text"
                    placeholder="Mensagem"
                    className="InputChatFooter"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message} />
                <MdSend onClick={handleSendMessage}/>
            </form>
        </div>
    )
}
