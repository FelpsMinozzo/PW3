import CampoTexto from '../campoTexto';
import './formulario.css'
import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa';

const Formulario = () => {
    
    const Times = [
        'Programação',
        'Front-End',
        'Data-Science',
        'DevOps',
        'Ux & Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }
    
    return(

        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card de colaborador</h2>
                <CampoTexto label='Nome' placeholder="Digite seu nome"/>
                <CampoTexto label='Cargo' placeholder="Digite seu cargo"/>
                <CampoTexto label='Imagem' placeholder="Digite o endereço da Imagem"/>
                <ListaSuspensa obrigatorio={true} label='Time' itens={Times}/>

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario