import CampoTexto from '../campoTexto';
import './formulario.css'
import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa';
import {useState} from 'react';

const Formulario = (props) => {

    const[nome, setNome] = useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')
    const[time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
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
    
    return(

        <section className='formulario'>
            <form onSubmit={aoSalvar}>

                <h2> Preencha os dados para criar o card de colaborador</h2>

                <CampoTexto 
                label='Nome' 
                placeholder="Digite seu nome"
                obrigatorio={true}
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto                 
                label='Cargo' 
                placeholder="Digite seu cargo"
                obrigatorio={true}
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto                 
                label='Imagem' 
                placeholder="Digite o endereço da sua imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa                
                label='Time' 
                obrigatorio={true}
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>
    )
}

export default Formulario