import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root{
--primary-color-light:#21abcd;
--primary-color:#007bff;
--secodary-color:#6c757d;
--background-dark-color:#10121A;
--background-dark-gray:#191D2B;
--background-dark-color2:#5f9ea0;
--background-light-color3:rgba(3,127,255,.3);
--background-light-color:191D2B;
--background-light-color:#F1F1F1;
--border-color:#a4acc4;
--font-light-color:#F1F1F1;
--font-dark-color:#313131;
--font-dark-color-2:#151515;
--sidebar-dark-color:#313131;
--scrollbar-bg-color:#383838;
--scrollbar-thump-color:#6b6b6b;
--scrollbar-track-color:#383838;
--border-right-color:#007bff;
--white-color:#ffff;

}

*{
padding:0;
margin:0;
box-sizing:border-box;
/* font-size:1.2rem; */
list-style:none;
font-family:'Nunito',sans-serif;
}

body{
background-color:var(--background-dark-color);
/* color:var (--font-light-color); */

}

body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}
textarea{
    max-width: 100%;
}

a{
font-family:inherit;
color: inherit;
font-size:1rem;
}

h1{
font-size:4rem;
color:var(--white-color);
span{
font-size:3rem;
}
}

span{
color:var(--primary-color)
}

/* h6{
    color:var(--white-color)
    font-size:1.2rem;
    padding-bottom:.6rem;
} */
`;
export default GlobalStyle