import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import UseClientes from "../hooks/useClientes";

export default function Home() {

  const {
    tabelaVisivel,
    exibirTabela,
    cliente,
    clientes,
    selecionarCliente,
    excluirCliente,
    salvarCliente,
    novoCliente,
    obterTodos, } = UseClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-600 to-purple-500
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ?
          (
            <>
              <div className="flex justify-end">
                <Botao cor='green' className="mb-2"
                  onClick={novoCliente}>
                  Novo Cliente</Botao>
              </div>
              <Tabela clientes={clientes}
                clienteSelecionado={selecionarCliente}
                clienteExcluido={excluirCliente}
              />
            </>
          ) : (
            <Formulario
              cliente={cliente}
              clienteMudou={salvarCliente}
              cancelado={exibirTabela}
            />
          )
        }
      </Layout>
    </div>
  )
}
