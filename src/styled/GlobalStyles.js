import { createGlobalStyle } from 'styled-components';
import newBg from '../img/bg-3.png';

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}
body{
    font-family: inter;
    background-image: url(${newBg});
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
    height: 100vh;

}
`;

export default GlobalStyle;
