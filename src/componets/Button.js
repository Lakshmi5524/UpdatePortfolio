import React from 'react'
import styled from 'styled-components'

function Button({button,filter }) {
    return (
        <ButtonsStyled>
            {
                button.map((btn, i)=>{
                    return <ButtonStyled className="btns" key={i} onClick={() =>filter(btn)}>
                       {btn}
                    </ButtonStyled>
                })
           
            }
            </ButtonsStyled>
        
    )
}
const ButtonStyled=styled.button`
outline:none;
border:none;
background-color:#48d1cc;
margin:5px;
padding:.8rem 2rem ;
object-fit:cover;
font-size:inherit;
color:black;
font-weight:900;
cursor:pointer;
transition:all .4s ease-in-out;
&active,&:focus{
    background-color:#dda0dd;

}
&:hover{
background-color:#99e6b3;
color:white;
}

`;

const ButtonsStyled=styled.div`
 margin-bottom:2rem;
 display:flex;
 justify-content:center;
 width:70%;
 margin:2.4rem auto;

`;

export default Button;
