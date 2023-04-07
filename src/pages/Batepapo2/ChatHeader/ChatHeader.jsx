import "./ChatHeader.css";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";

export function ChatHeader({ photoURL, name }) {
    return (
        <div className="ChatHeader">
            <div className="UserInfo">
                {photoURL ? <img className="AvatarHeader" src={photoURL} alt="Avatar" /> : <MdPerson />}
                <div className="NameContent">
                    <span className="NameHeader">{name}</span>
                </div>
            </div>
            <div className="OptionsHeader">
                <MdSearch/>
                <MdMoreVert/>
            </div>
        </div>
    )
}