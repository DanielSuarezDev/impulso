import React from "react";
import { Container, Title, ContentInfo, Subtitle } from "./styles";
export const About = () => {
  return (
    <Container>
      <Title>Acerca</Title>
      <Subtitle style={{ width: "80%", fontSize: "15px", textAlign: "center" }}>
        Somos Baustistas independientes que comparten la palabra de Dios.
      </Subtitle>
      <ContentInfo>
        <p>Declaración de Fe</p>
        <p>
          Creemos en un solo Dios, que existe eternamente en tres personas
          distintas: el Padre, el Hijo y el Espíritu Santo.
        </p>
        <p>
          Creemos que la Biblia es la Palabra inspirada de Dios, infalible y
          autoritativa en todo lo que enseña.
        </p>
        <p>
          Creemos en la salvación por gracia a través de la fe en Jesucristo,
          quien murió en la cruz por nuestros pecados y resucitó al tercer día.
        </p>
        <p>
          Creemos que el bautismo por inmersión es una ordenanza de la iglesia,
          que simboliza la muerte, el entierro y la resurrección de Cristo, y
          representa nuestra muerte al pecado y nuestra resurrección a una nueva
          vida en Él.
        </p>
        <p>
          Creemos en la participación en la Cena del Señor como una expresión de
          nuestra comunión con Él y con otros creyentes.
        </p>
        <p>
          Creemos en la santificación, que es el proceso por el cual somos
          transformados a la imagen de Cristo a través del poder del Espíritu
          Santo.
        </p>
        <p>
          Creemos en la Iglesia, que es el cuerpo de Cristo en la tierra,
          compuesta de todos los creyentes, y que tiene la responsabilidad de
          proclamar el Evangelio a todo el mundo.
        </p>
        <p>
          Creemos en la segunda venida de Cristo, cuando Él vendrá para juzgar a
          los vivos y a los muertos, y establecerá su reino eterno.
        </p>
        <p>
          Creemos en la resurrección de los muertos, en la vida eterna de los
          salvos y en el castigo eterno de los perdidos.
        </p>
        <p>
          Creemos que todos los creyentes son llamados a vivir una vida de fe y
          obediencia a Dios, y a buscar el bienestar de la humanidad y la
          justicia en el mundo.
        </p>
        <p>
          Como cristianos bautistas, nos comprometemos a vivir nuestras vidas en
          obediencia a la Palabra de Dios, y a servir a nuestro prójimo con amor
          y compasión, mientras esperamos con alegría la venida de nuestro Señor
          y Salvador Jesucristo.
        </p>
      </ContentInfo>
      <Title>
        La única manera de ir al cielo es creyendo en el Señor Jesucristo.
      </Title>
    </Container>
  );
};
