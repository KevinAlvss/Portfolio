import React from 'react';

import { Container, Historia , PerfilContainer , Dados , Item } from './styles';

function About() {
  return (
      <Container>

          <Historia>
            <h2>Minha História na Área da proramação</h2>
            <p>Tudo começou em um video no youtube sobre html e css, e aquilo despertou a minha curiosidade até que eu fui parar no Instituto Social Nossa Senhora de Fátima, e no ano de 2020 eu ganhei o diploma do curso técnico de infórmatica junto com uma nova profissão, um programador</p>
          </Historia>

        <PerfilContainer>
          <h3>Perfil</h3>

          <Dados>
              <Item>
                  <h4>Nome:</h4>
                  <span>Kevin Alves Pereira</span>
              </Item>
              <Item>
                  <h4>Idade:</h4>
                  <span>15</span>
              </Item>
              <Item>
                  <h4>Cargo:</h4>
                  <span>Full-stack Developer</span>
              </Item>
              <Item>
                  <h4>LinkedIn:</h4>
                  <span>Kevin Alves Pereira</span>
              </Item>
          </Dados>
        </PerfilContainer>
      </Container>
  );
}

export default About;