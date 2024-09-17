import styles from "./Card.module.css";

function Card(props) {
  function disable() {
    let lista = [];
    if (props.info1 == "disable") {
      lista.push(<p className={styles.disable}>PNG templates</p>);
    } else if (props.info1 == "enable") {
      lista.push(<p className={styles.enable}>PNG templates</p>);
    }

    if (props.info2 == "disable") {
      lista.push(<p className={styles.disable}>Figma responsive components</p>);
    } else if (props.info2 == "enable") {
      lista.push(<p className={styles.enable}>Figma responsive components</p>);
    }

    if (props.info3 == "disable") {
      lista.push(<p className={styles.disable}>Constant updates</p>);
    } else if (props.info3 == "enable") {
      lista.push(<p className={styles.enable}>Constant updates</p>);
    }

    if (props.info4 == "disable") {
      lista.push(<p className={styles.disable}>Custom templates</p>);
    } else if (props.info4 == "enable") {
      lista.push(<p className={styles.enable}>Custom templates</p>);
    }
    return <>{lista}</>;
  }
  function botao() {
    if (props.corBotao == "green") {
      return (
        <>
          <button className={styles.botaoVerde}>Try now</button>
        </>
      );
    } else {
      return (
        <>
          <button className={styles.botaoVermelho}>Try now</button>
        </>
      );
    }
  }
  return (
    <>
      <div className={styles.card}>
        <h2>{props.titulo}</h2>
        <div className={styles.containerInfo}>{disable()}</div>
        <h2>${props.preco}</h2>
        <p className={styles.textoMenor}>Per month</p>
        {botao()}
      </div>
    </>
  );
}

export default Card;
