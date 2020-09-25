import styled from 'styled-components';

export const Container = styled.div`
    height:70vh;
    width:100vw;

    background-color:#ecf8f8;

    display:flex;
    flex-direction:row-reverse;
    align-items:center;
    justify-content:space-evenly;
`;

export const Historia = styled.div`

    max-width:400px;

    > h2{
        font-size:2.8rem;
    }

    > p{
        font-size:1.8rem;
    }
`;

export const PerfilContainer  = styled.div`
    > h3{
        font-size:3.5rem;
    }
`;

export const Dados = styled.div`
    display:flex; 
    flex-direction:column;
    justify-content:space-between;
`;

export const Item  = styled.div`
    margin:3px 0;

    > h4{
        font-size:2.5rem;
    }
    
    > span{
        font-size:1.8rem;
    }
`;
