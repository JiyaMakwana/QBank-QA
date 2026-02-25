function InputPreview({value,onChange}) {
    return(
        <div>
            <form>
                <input 
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}  //This is child → parent communication.
                />
            </form>
        </div>
    )
}

export default InputPreview;