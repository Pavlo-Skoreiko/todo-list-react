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
            Ta aplikacja została stworzona przez początkującego programistę,
            podczas nauki na internetowym kursie front-developera.<br></br>
            Witam, nazywam się Pavlo Skoreiko. Jestem pracownikiem budowlanym,
            mistrzem maszynowego tynkowania gipsowego, w wolnym czasie studiuję
            naukę programowania.
            <p>
              Na tych kursach zdobyłem ogromną wiedzę z zakresu tworzenia stron
              internetowych. Mam nadzieję, że kiedyś zostanę mistrzem w zawodzie
              front-developera. 🧐
            </p>
          </Wrapper>
        </>
      }
    />
  </Container>
);
