import React from 'react'
import styled from 'styled-components'
const ServiceCard = ({ image, title, paragraph }) => {
	return (
		<ServiceCardStyled>
			<div className='container'>
				<img src={image} alt="" />
				<h4>{title}</h4>
				<p>{paragraph}</p>
			</div>
		</ServiceCardStyled>
	)
}
const ServiceCardStyled = styled.div`
background-color:#50404d;
margin-top:40px;
border-left:1px solid var(--border-color);
border-top:8px solid var(--border-color);
border-right:1px solid var(--border-color);
border-bottom:1px solid var(--border-color);
transition: all .4s ease-in-out;
&:hover{
border-top:8px solid var(--primary-color);
}
.container{
padding:10px;
color: white;
h4{
color: #08e8de;
font-size:1.6rem;
padding:1rem 0;
position:relative;
&::after{
content: "";
width: 4rem;
background-color:var(--border-color);
height: 4px;
position:absolute;
left:0;
bottom: 0;
border-radius:10px;
}
}
p{
padding: .8rem 0;
}
}

`
export default ServiceCard
