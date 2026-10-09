import Titulo from './componets/Titulo'
import './App.css'
import Nota from './componets/Nota'
import Alunos from "./componets/Alunos"
import Produto from './componets/Produto'

function App() {
  return (
    <>
    <Alunos nome="Carlos" turma="Desenvolvimento de Sistemas" />
    <Nota disciplina="React" nota={8.5} />
    <Alunos nome="Ana" turma="Desenvolvimento de Sistemas" />
    <Nota disciplina="React" nota={9.5} />
    <Alunos nome="Pedro" turma="Desenvolvimento de Sistemas" /> 
    <Nota disciplina="React" nota={7.5} />

    <h1><strong>LOJINHA DE VENDAS DE ELETRONICOS</strong></h1>

    <>
  <Produto
    nome="Teclado Mecânico"
    descricao="Teclado com iluminação RGB"
    preco={250}
    disponivel={true}
    textoBotao="Comprar"
  />

  <Produto
    nome="Mouse Gamer"
    descricao="Mouse óptico com 16000 DPI e RGB"
    preco={180}
    disponivel={true}
    textoBotao="Comprar"
  />

  <Produto
    nome="Monitor 27 polegadas"
    descricao="Monitor IPS Full HD 144Hz"
    preco={1200}
    disponivel={false}
    textoBotao="Avise-me"
  />

  <Produto
    nome="Placa de Vídeo RTX 4060"
    descricao="GPU NVIDIA 8GB GDDR6"
    preco={2200}
    disponivel={true}
    textoBotao="Comprar"
  />

  <Produto
    nome="Memória RAM 16GB"
    descricao="DDR4 3200MHz (2x8GB)"
    preco={350}
    disponivel={false}
    textoBotao="Avise-me"
  />
  <Produto
  nome="Processador Ryzen 7 5700X"
  descricao="AMD 8 núcleos / 16 threads - Zen 3"
  preco={1050}
  disponivel={true}
  textoBotao="Comprar"
/>
</>
    </>
  )
}

export default App
