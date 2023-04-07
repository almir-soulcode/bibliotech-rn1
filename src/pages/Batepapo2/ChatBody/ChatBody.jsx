import { useContext, useRef } from "react";
import "./ChatBody.css";
import { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase/config"
import { Message } from "../Message/Message";
import { collection, doc, orderBy, query } from "firebase/firestore";


export function ChatBody({ chatId }) {

    const messagesRef = collection(
        db,
        "chats",
        chatId,
        "messages"
    );

    const messagesQuery = query(
        messagesRef,
        orderBy("timestamp", "asc")
    );

    const [messagesRes] = useCollection(messagesQuery);


    const refBody = useRef("");
    useEffect(() => {
        if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
            refBody.current.scrollTop =
                refBody.current.scrollHeight - refBody.current.offsetHeight;
        }
    }, [messagesRes]);
    return (
        <div className="ChatBody" ref={refBody}>
            {messagesRes?.docs.map((message) => (
                <Message
                    key={message.id}
                    user={message.data().user}
                    message={{
                        message: message.data().message,
                        timestamp: message.data().timestamp?.toDate().getTime(),
                    }}
                />
            ))}
        </div>
    )
}