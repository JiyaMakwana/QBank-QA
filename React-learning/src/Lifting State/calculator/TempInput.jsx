export default function TemperatureInput({value, onChange}) {
    return (
        <input 
        // type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}/>
    )
}