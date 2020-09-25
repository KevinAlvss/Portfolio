import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        font-size:60%;

        --background : #f2e9e4;
        --lightblue: #A8DADC;
        --blue:#457B9D;
        --darkblue:#1D3557;
        --red:#E63946;
        --green:#0ead69;
    }
    
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body,
    html,
    #root{
        height:100%;
        width:100%;

        overflow-x:hidden;

        background-color: var(--background);

        color:#000;
    }

    body{
        font-family: 'Merriweather', serif;
    }

    h1,h2,h3,h4,button,input{
        font-family:'Poppins', sans-serif;
    }

`;

export default GlobalStyle;