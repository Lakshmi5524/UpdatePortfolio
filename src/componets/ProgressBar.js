import React from 'react'
import styled from 'styled-components'


function ProgressBar({title,width,text}) {
    return (
        <ProgressBarStyled>
            <h6>{title}</h6>
             <div className='progress-bar'>
               <p>{text}</p>
                <div className='progress'>
                    <span style={{width: width}}></span>
                </div>
             </div>
        </ProgressBarStyled>
    )
}
const ProgressBarStyled= styled.div `
h6{
    color:var(--white-color);
    font-size:1.2rem;
    padding-bottom:.6rem;
    margin-left:15px
 
}
.progress-bar{
    display:flex;
    align-items: center;
    color:white;
    p{
        padding:1.1rem;
        color:darkgray;
    }
    .progress{
        position:relative;
        width:100%;
        height:.2rem;
        background-color:blue;
        span{
           position:absolute;
           right:0;
           bottom:0;
           height:.4rem;
           background-color:gray;
          
        }
    }
}
`
export default ProgressBar
