import React from 'react';

import { Container , TecsContainer , Languages , PerCent , NumberBox , Fill} from './styles';

function Habilities() {
  return (
      <Container>
          <h2>Skills</h2>
          <TecsContainer>
            <Languages>
                <span>HTML:</span>
                <span>CSS:</span>
                <span>JS:</span>
                <span>REACT:</span>
                <span>MYSQL:</span>
                <span>C#:</span>
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