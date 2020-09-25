import React from 'react';

import { Container , TecsContainer , Languages , Item , PerCent , NumberBox , Fill} from './styles';

function Habilities() {
  return (
      <Container>
          <h2>Skills</h2>
          <TecsContainer>
            <Languages>
                <Item>HTML</Item>
                <Item>CSS</Item>
                <Item>JS</Item>
                <Item>REACT</Item>
                <Item>MYSQL</Item>
                <Item>C#</Item>
            </Languages>
            <PerCent>
                <NumberBox>
                    <Fill valor="60"/>
                </NumberBox>
                <NumberBox>
                    <Fill valor="60"/>
                </NumberBox>
                <NumberBox>
                    <Fill valor="50"/>
                </NumberBox>
                <NumberBox>
                    <Fill valor="40"/>
                </NumberBox>
                <NumberBox>
                    <Fill valor="60"/>
                </NumberBox>
                <NumberBox>
                    <Fill valor="55"/>
                </NumberBox>
            </PerCent>
          </TecsContainer>
      </Container>
  );
}

export default Habilities;