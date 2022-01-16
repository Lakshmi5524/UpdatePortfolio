import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import avatar from '../img/mypic1.jpg'

const Navigation = () => {
    return (
        <NavigationStyled>
            <div className='avatar'>
                <img src={avatar} alt="" />
            </div>
            <ul className='nav-items'>
                <li className='nav-item'>
                    <NavLink to="/" activeClassName='active-class' exact >Home</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/about" activeClassName='active-class' exact>About</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/resume" activeClassName='active-class' exact>Resume</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/portfolios" activeClassName='active-class' exact>Portfolios</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/blogs" activeClassName='active-class' exact>Blogs</NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to="/contact" activeClassName='active-class' exact>Contact</NavLink>
                </li>
            </ul>

            <footer className='footer'>
                <p>@2021 my Portfolio Website</p>
            </footer>
        </ NavigationStyled>
    )
}
const NavigationStyled = styled.nav`
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
height: 100%;
width: 100%;
border-right:8px solid var(--border-color);
margin-bottom:20px;

.avatar{
width: 100%;
border-bottom:1px solid var(--border-color);
padding: 1rem 0;
text-align:center;

img{
width: 80%;
height:75%;
border-radius:50%;
object-fit:cover;
border:8px solid var(--primary-color-light))

}
}

.nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color);
            color: white;
        }

     li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 500;
                letter-spacing: 1px;
                text-decoration:none;
                color:var(--white-color);

                &:hover{
                    cursor: pointer;
                    color:var(--white-color)
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
	}

 footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
            color: white;
        }
    }

`;
export default Navigation
