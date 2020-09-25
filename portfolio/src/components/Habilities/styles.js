import styled from 'styled-components';

export const Container = styled.div`
    height:80vh;
    width:100vw;

    background-color: var(--background);

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    > h2{
        font-size:6.8rem;
    }

`; 

export const TecsContainer = styled.div`
    height:300px;
    width:60%;

    display:flex;
    justify-content:space-between;

`;

export const Languages = styled.div`
    height:100%;
    width:40%;

    display:flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content:space-between;

    padding-right:50px;

    > span{
        font-size:2.5rem;
    }
`;

export const PerCent = styled.div`
    height:100%;
    width:60%;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

export const NumberBox = styled.div`
    height:3.0rem;
    width:100%;

    border-radius:0.8rem;

    background-color:#fff;
`;

export const Fill = styled.div`
    height:100%;
    width:${(props) => `${props.valor}%`};

    background-color:var(--green);
`;