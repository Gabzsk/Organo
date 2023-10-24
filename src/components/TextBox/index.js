import './TextBox.css'

function TextBox(props) {
    
    const modifiedPlaceholder = `${props.placeholder}`

    const whenTyped = (event) => {
        props.whenChanged(event.target.value) 
    }

    return(
        <div className="text-box">
            <label>{props.label}</label>
            <input value={props.stateValue} onChange={whenTyped} required={props.mandatory} placeholder={props.placeholder} />
        </div>
    )
}

export default TextBox