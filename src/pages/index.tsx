import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 24, '2'),
    new Cliente('Lucia', 14, '3'),
    new Cliente('Brenda', 20, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-600 to-purple-500
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ?
          (
            <>
              <div className="flex justify-end">
                <Botao cor='green' className="mb-2"
                  onClick={()=> setVisivel('form')}>
                  Novo Cliente</Botao>
              </div>
              <Tabela clientes={clientes}
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}
              />
            </>
          ) :  (
            <Formulario
              cliente={clientes[0]}
              clienteMudou ={salvarCliente}
              cancelado = {() => setVisivel('tabela')}
              />
          )
      }
      </Layout>
    </div>
  )
}
