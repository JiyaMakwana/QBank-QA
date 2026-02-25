import {useState} from "react";
import DisplayPreview from "./components/DisplayPreview";
import InputPreview from "./components/InputPreview";

export default function LivePreview() {
    const [username, setUsername]=useState("");

    const handleChange=(value) => {
        setUsername(value);
    }

    return (
        <div>
            <h2>Username Live Preview</h2>
            <DisplayPreview 
                username={username}/>

            <InputPreview
                value={username}
                onChange={handleChange}
            />
        </div>
    )
}