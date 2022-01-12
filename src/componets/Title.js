import React from 'react'
import styled from 'styled-components';

function Title({ title, span }) {
	return (
		<TitleStyled>
			<h2>{title} <b><span>{span}</span></b></h2>
		</TitleStyled>
	)
}
const TitleStyled = styled.div`
position: relative;

h2{
color: var(--white-color);
font-size:3.1rem;
font-weight:600;
text-transform:uppercase;
position:relative;
&::before{
content:"";
position:absolute;
bottom:0;
width: 8.4rem;
height: .33rem;
background-color:#007bff;
border-radius:15px;
}
}
/* var(--background-light-color-3); */

span{
font-weight:700;
color:rgba(25,29,43,.44);
font-size:5rem;
position:absolute;
left:0;
top:20%;
z-index:-1;


}
`
export default Title
