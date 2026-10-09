function Produto(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>{props.descricao}</p>
      <p>Preço: R$ {props.preco}</p>
      <p>Disponível: {props.disponivel ? "Sim" : "Não"}</p>
      <button>{props.textoBotao}</button>
    </div>
  );
}

export default Produto