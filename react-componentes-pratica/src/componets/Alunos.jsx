function Alunos (props){
    return (
        <>
        <div className= "Alunos">
        <h1>Nome: {props.nome}</h1>
        <p>Turma: {props.turma}</p>
        </div>
        </>
    )
}

export default Alunos