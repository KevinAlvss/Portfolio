import styled from 'styled-components';

export const Container = styled.div`
    height: 25vh;
    width: 100vw;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:var(--darkblue);

    > h4{
        color:#fff;

        font-size:3.5rem;
    }
`;

export const Contratar = styled.button`
    background-color: var(--lightblue);
    border:none;
    cursor:pointer;

    width:200px;
    height:50px;
    border-radius:0.3rem;
    transition:opacity 200ms;

    &:hover , &:active{
        opacity: .8;
    }
`;
