import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height:100vh;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    background:var(--blue);

    > *{
        color:#fff;
    }

    > h3{
        color:var(--darkblue);
        font-size:4.0rem;
    }

    > h1{
        font-size:8.8em;
    }

    > p{
        font-size:2.0rem;
    }
`;

export const Formacao = styled.p`
    color:#bdbfc8;
`;