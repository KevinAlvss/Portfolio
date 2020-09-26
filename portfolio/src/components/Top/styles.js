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

    @media (max-width: 550px){
        > h1{
            font-size:6.8rem;
        }

        > h3{
            font-size:2.5rem;
        }

        > p{
            max-width:300px;
            text-align:center;
        }
    }

    @media (max-width: 400px){
        > h1{
            font-size:5.0rem;
        }

        > p{
            font-size:1.5rem;
        }
    }
`;

export const Formacao = styled.p`
    color:#bdbfc8;

    @media (max-width:450px){
        font-size:1.5rem;
    }
`;