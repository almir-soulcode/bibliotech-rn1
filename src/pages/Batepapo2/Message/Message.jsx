import { useContext } from "react"
import "./Message.css";
import { AuthContext } from "../../../contexts/AuthContext";


export function Message({user, message }) {
    const usuarioLogado = useContext(AuthContext);
    const isMessageFromCurrentUser = usuarioLogado?.email === user;
    return (
        <div className="Message">
            <div className={`Line ${isMessageFromCurrentUser ? "me" : ""} `}>
                    <div className="ContentMessage">
                        <span id="MessageSpan">{message.message}</span>
                        <div id="MessageDate">
                            {new Date(message?.timestamp).toLocaleString()}
                        </div>
                    </div>
            </div>
        </div>
    )
}