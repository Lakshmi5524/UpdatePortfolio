import React from 'react'
import styled from 'styled-components'
const ReviewItem = ({ text }) => {
	return (
		<ReviewItemStyled>
			<p>{text}</p>
		</ReviewItemStyled>
	)
}

const ReviewItemStyled = styled.div`
padding: 2rem 1rem;
border-left:8px solid #e8ccd7;
 position: relative;
width: 100%;
&:not(:first-child){
margin-left:2rem;
}
background-color:var(--background-light-color3);
&::after{
        content: "";
        position: absolute;
        left: 2rem;
        border-width: .8rem;
        top: 100%;
        border-style: solid;
        border-color: var(--background-light-color3) transparent transparent var(--background-light-color3);
    }
p{
padding: 1rem 0;
color: white;
}

`
export default ReviewItem
