import {useState} from "react";
import ToggleButton from "./components/ToggleButton";
import Message from "./components/Message";

export default function ParentShowHide() {
    const [isVisible, setVisible]=useState(false);

    const handleToggle=()=>{
        setVisible(prev=>!prev)
    }

    return(
        <div>
            <ToggleButton onToggle={handleToggle}/>
            <Message isVisible={isVisible}/>
        </div>
    )
}