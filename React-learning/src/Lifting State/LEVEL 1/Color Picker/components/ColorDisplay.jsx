function ColorDisplay({color}){
    return(
        <div 
            style={{
                backgroundColor:color,
                color:"white" 
            }}>
            <h1>Color Picker</h1>
        </div>
    );
}

export default ColorDisplay;