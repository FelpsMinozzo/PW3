import Banner from './components/banner';
import Formulario from './components/formulario'
import { useState } from 'react';
import Time from './components/Time';

function App(){

    const times = [
        {
            nome: 'Programação',
            corPrimaria: '#57C278',
            corSecundaria: '#D9F7E9'
        },
        {
            nome: 'Front-End',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF'
        },
        {
            nome: 'Data Science',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2'
        },
        {
            nome: 'DevOps',
            corPrimaria: '#E06869',
            corSecundaria: '#FDE7E8'
        },
        {
            nome: 'UX & Design',
            corPrimaria: '#FFBA05',
            corSecundaria: '#FFF5D9'
        },
        {
            nome: 'Mobile',
            corPrimaria: '#DB6EBF',
            corSecundaria: '#FAE9F5'
        },
        {
            nome: 'Inovação & Gestão',
            corPrimaria: '#FF8A29',
            corSecundaria: '#FFEEDF'
        }
    ]

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionado = (colaborador) => {
        console.log(colaborador)
        setColaboradores([...colaboradores, colaborador])
    }

    return(
        <div className="App">
                <Banner />
                <Formulario  
                times={times.map(time => time.nome)} 
                aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
                
                {times.map(time => <Time
                key={time.nome}
                nome={time.nome}
                corPrimaria={time.corPrimaria}
                corSecundaria={time.corSecundaria}
                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                />)}

            </div>
    );
}

export default App;