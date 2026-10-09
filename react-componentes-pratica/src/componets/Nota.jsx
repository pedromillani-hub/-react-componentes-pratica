function Nota (props){
    return (
        <>
        <div className= "Nota">
            <p>disciplina: {props.disciplina} </p> 
            <p>nota: {props.nota}</p>
        </div>
        </>
    )
}

export default Nota