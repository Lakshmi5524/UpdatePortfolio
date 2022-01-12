import React from 'react'
import styled from 'styled-components'
const PrimeButton = ({ title }) => {
	return (
		<PrymaryButtonStyled>
			<a href="https://www.w3schools.com" target="_blank">{title}</a>

		</PrymaryButtonStyled>
	)
}
const PrymaryButtonStyled = styled.a`
background-color:var(--primary-color);
padding:.8rem 2.5rem;
color:white;
cursor:pointer;
display:inline-block;
font-size:inherit;
text-transform:uppercase;
position:relative;
transition:all.4s ease-in-out;

&::after{
content: "";
position:absolute;
width:0;
height: .2rem;
transition:all.4s ease-in-out;
left:0;
bottom: 0;
opacity:.7;
}

&:hover::after{
width:100%;
background-color:var(--white-color);

}
`
export default PrimeButton
