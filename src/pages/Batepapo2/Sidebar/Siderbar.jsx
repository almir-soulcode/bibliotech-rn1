import { SidebarChats } from "../SidebarChats/SidebarChats"
import { SidebarHeader } from "../SidebarHeader/SidebarHeader"
import "./Sidebar.css"

export function Sidebar({setUserChat, userChat}){
    return (
        <div className="Sidebar">
            <SidebarHeader setUserChat={setUserChat}/>
            <SidebarChats setUserChat={setUserChat} userChat={userChat}/>
        </div>
    )
}