import React from 'react'

import styled from 'styled-components';
const ContactItem = ({ icon, title, cont1, cont2 }) => {
    return (
        <ContactItemStyled>
            <div className="left-content">
                <p>{icon}</p>
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{cont1}</p>
                <p>{cont2}</p>
            </div>
        </ContactItemStyled >
    )
}
const ContactItemStyled = styled.div`
  padding:1.5rem 2rem;
    background-color: var(--background-dark-gray);
    color:white;
    display: flex;
    align-items: center;
   
    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
    .left-content{
        padding: 1rem;
        border: 1px solid var(--border-color);
        color:white;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        color: var(--white-color);

        svg{
            font-size: 2.3rem;
        }
    }
    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
          
        }
        p{
            padding: .1rem 0;
            color: var(--white-color);
        }
    }
`
export default ContactItem
