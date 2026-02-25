function ColorButtons({onSelectColor}) {
    return(
        <div>
            <button 
                style={{backgroundColor:"red", color:"white"}}
                onClick={()=> onSelectColor("red")}
            >
                Red
            </button>

            <button 
                style={{backgroundColor:"violet", color:"white"}}
                onClick={()=> onSelectColor("violet")}
            >
                Violet
            </button>

            <button 
                style={{backgroundColor:"green", color:"white"}}
                onClick={()=> onSelectColor("green")}
            >
                Green
            </button>
        </div>
    )
}

export default ColorButtons;