import styles from "./Section.module.css";
import SectionCard from "../SectionCard/SectionCard"
import Titulo from "../Titulo/Titulo";
import Cor from "../Cor/Cor"
function Section(props) {
  if (props.tipo == "1") {
    return (
      <>
        <Titulo titulo="PLANS+" />
        <Cor cor="red"/>
        <SectionCard tipo="1"/>
      </>
    );
  }else{
    return(
        <>
        <Titulo titulo="NEW MEMBER" />
        <Cor cor="green"/>
        <SectionCard tipo="2"/>
       </>
    )
  }
}

export default Section;
