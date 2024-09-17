import styles from "../SectionCard/SectionCard.module.css";
import Card from "../Card/Card";

function SectionCard(props) {
  if (props.tipo == "1") {
    return (
      <div className={styles.container}>
        {" "}
        <Card
          titulo="FREE"
          preco="0"
          info1="enable"
          info2="disable"
          info3="disable"
          info4="disable"
          corBotao="red"
        />
        <Card
          titulo="PREMIUM"
          preco="99"
          info1="enable"
          info2="enable"
          info3="disable"
          info4="disable"
          corBotao="red"
        />
        <Card
          titulo="PRO"
          preco="199"
          info1="enable"
          info2="enable"
          info3="enable"
          info4="enable"
          corBotao="red"
        />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        {" "}
        <Card
          titulo="FREE"
          preco="0"
          info1="enable"
          info2="disable"
          info3="disable"
          info4="disable"
          corBotao="green"
        />
        <Card
          titulo="PREMIUM"
          preco="199"
          info1="enable"
          info2="enable"
          info3="disable"
          info4="disable"
          corBotao="green"
        />
        <Card
          titulo="PRO"
          preco="399"
          info1="enable"
          info2="enable"
          info3="enable"
          info4="enable"
          corBotao="green"
        />
      </div>
    );
  }
}

export default SectionCard;
