import { useState } from 'react';
import Button from '../Button';
import SuspendedList from '../SuspendedList';
import TextBox from '../TextBox';
import './Form.css'


function Form({whenRegistered,teams}) {

    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')
    
    const whenSaving = (event) => {
        event.preventDefault()
        whenRegistered({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
         <section className="formBox">
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextBox 
                    mandatory={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    stateValue={nome}
                    whenChanged = {stateValue => setNome(stateValue)}
                    />
                <TextBox 
                    mandatory={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    stateValue={cargo}
                    whenChanged = {stateValue => setCargo(stateValue)}
                    />
                <TextBox 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    stateValue={imagem}
                    whenChanged = {stateValue => setImagem(stateValue)}
                />
                <SuspendedList 
                    mandatory={true} 
                    label="Time" 
                    itens={teams}
                    stateValue={time}
                    whenChanged = {stateValue => setTime(stateValue)}
                    />
                <Button> 
                    Criar Card 
                </Button>
            </form>
         </section>
    )

}

export default Form