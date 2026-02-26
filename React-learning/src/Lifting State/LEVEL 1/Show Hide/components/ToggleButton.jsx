function ToggleButton({onToggle}) {
    return(
        <div>
            <button 
                style={{backgroundColor:"lightblue"}}
                onClick={onToggle}>Toggle</button>
        </div>
    )
}

export default ToggleButton;