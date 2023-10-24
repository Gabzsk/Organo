import './Collaborator.css'

function Collaborator({name, imagem, cargo, collaboratorColor}) {
    return (
        <div className = "collaborator">
            <div className="header" style={{backgroundColor: collaboratorColor}}>
                <img src={imagem}  alt={name}/>
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{cargo}</h5>
            </div>

        </div>
    )
}

export default Collaborator