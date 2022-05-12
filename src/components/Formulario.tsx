import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente

}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.nome ?? 0)
    return (
        <div>
            {id ?
                (<Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-4"/>) :
                false}
            <Entrada
                texto="Nome"
                valor={nome}
                changeValue={setNome}
                className="mb-4" />
            <Entrada
                texto="Idade"
                tipo="number"
                valor={idade}
                changeValue={setIdade} />
            <div className="flex justify-end mt-7">
                <Botao cor='blue' className="mr-2">
                    {id? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao>
                    Cancelar
                </Botao>
            </div>
        </div>
    )

}