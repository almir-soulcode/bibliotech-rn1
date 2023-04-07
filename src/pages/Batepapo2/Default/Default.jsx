import { MdMessage } from "react-icons/md";
import "./Default.css"

export function Default () {
    return (
        <div className="DefaultChat">
            <MdMessage/>
            <h1 id="TitleDefault">Bate-papo</h1>
            <span id="InfoDefault">Entre em contato com os usuarios do bibliotech!</span>
        </div>
    )
}