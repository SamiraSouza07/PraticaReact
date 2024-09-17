import styles from "./Cor.module.css"

function Cor(props){
    if(props.cor =="red"){
    return(
        <>
        <div className={styles.caixaVermelha}>red</div>
        
        </>
    )
}else{
    return(
        <>
        <div className={styles.caixaVerde}>green</div>
        
        </>
    )
}
}

export default Cor