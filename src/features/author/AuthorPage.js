import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Wrapper } from "../Wrapper";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Pavlo Skoreiko"
      body={
        <>
        <Wrapper>
          Witam, nazywam się Pavlo Skoreiko. Jestem studentem informatyki na
          Uniwersytecie Jagiellońskim. Zajmuję się programowaniem od 2015 roku.
          <p>W tym czasie zdobyłem wiele doświadczenia w tworzeniu stron
          internetowych, aplikacji mobilnych oraz aplikacji desktopowych. W
          wolnym czasie lubię grać w gry komputerowe, oglądać filmy oraz seriale
          oraz czytać książki.</p>
        </Wrapper>
        </>
      }
    />
  </Container>
);
