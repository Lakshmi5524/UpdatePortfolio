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
outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .4rem 2rem;
    font-size: inherit;
    color: var(--white-color);
    cursor: pointer;
    transition: all .4s ease-in-out;
    margin-bottom: .6rem;
    &:active ,&:focus{
        background-color: var(--primary-color);
    }
    &:hover{
        background-color: var(--primary-color);
    }
    &:not(:last-child){
        margin-right: .6rem;
    }
`;
const ButtonsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 2.4rem auto;

`;

export default Button;
