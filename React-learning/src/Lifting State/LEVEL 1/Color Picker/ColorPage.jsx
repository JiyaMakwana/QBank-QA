import {useState} from "react";
import ColorButtons from "./components/ColorButtons";
import ColorDisplay from "./components/ColorDisplay";

export default function ColorPage() {
    const [color, setColor]= useState("white");

    const handleColor=(selectedColor)=>{
        setColor(selectedColor);
    }

    return(
        <div>
            <h1>Color Preview</h1>
            <h5>Selected Color: {color}</h5>

            <ColorButtons
                onSelectColor={handleColor}/>

            <ColorDisplay
                key={color.id}
                color={color}
            />
        </div>
    )


}