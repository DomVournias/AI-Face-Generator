import { createGlobalStyle } from "styled-components";
import ProximaBold from "../fonts/ProximaBold.woff2";
import ProximaSemiBold from "../fonts/ProximaSemiBold.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'ProximaBold';
        src: local('ProximaBold'), local('ProximaBold'),
        url(${ProximaBold}) format('woff2');
        
    }
    @font-face {
        font-family: 'ProximaSemiBold';
        src: local('ProximaSemiBold'), local('ProximaSemiBold'),
        url(${ProximaSemiBold}) format('woff2');
        
    }
`;
