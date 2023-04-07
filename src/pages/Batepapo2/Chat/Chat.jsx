import { ChatBody } from "../ChatBody/ChatBody"
import { ChatFooter } from "../ChatFooter/ChatFooter"
import { ChatHeader } from "../ChatHeader/ChatHeader"
import { Default } from "../Default/Default"
import "./Chat.css"

export function Chat({userChat}){
    if (!userChat) return <Default/>
    return (
        <div className="Chat">
            <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name}/>
            <ChatBody chatId={userChat?.chatId}/>
            <ChatFooter chatId={userChat?.chatId}/>
        </div>
    )
}