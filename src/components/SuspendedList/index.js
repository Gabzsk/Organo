import "./SuspendedList.css"

function SuspendedList(props) {
    return(
        <div className="suspended-list">
            <label>{props.label}</label>
            <select  onChange={event => props.whenChanged(event.target.value)} required={props.required} value={props.stateValue}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}> {item} </option>)}
            </select>
        </div>
    )
}

export default SuspendedList