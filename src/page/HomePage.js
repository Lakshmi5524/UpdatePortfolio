import React from 'react'
// import Particles from "react-tsparticles";
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from '../componets/Particle'
function HomePage() {
	return (
		<HomePageStyled>
			<div className='p-particles-js'>
				<Particle />
			</div>

			<div className='typography'>
				<h1>Hai I am <span>Lakshmi</span></h1>
				<p>
					Intended to structure my growth in pace with the ever-changing corporate environment. Make my
					learning curve to move in a linear fashion along with the growth of functional skills coupled with overall
					personality development to face the challenging times ahead
				</p>
				<div className='icons'>
					<a href="https://github.com/Lakshmi5524" target="_blank" className=' icon i-github'>
						<GitHubIcon />
					</a>

					<a href="https://www.linkedin.com/in/lakshmi-saravanan-584015214/" target="_blank" className=' icon i-linked'>
						<LinkedInIcon />
					</a>
				</div>
			</div>
		</HomePageStyled >
	)
}

const HomePageStyled = styled.header`
	 width: 100%;
    height: 100vh;
    position: relative;

/* .p-particles-js{
position:absolute;
top:0;
left: 0;
} */
.typography{
color:  white;
position:absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
text-align:center;
width:80%;

.icons{
display:flex;
align-items:center;
justify-content:center;
margin-top:1rem;

.icon{
border: 2px solid var(--border-color);
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
margin: 5px;
transition:all .4s ease-in-out;
&:hover{
border: 2px solid var(--primary-color);
color:var(--primary-color)
}
&:not(:list-child){
margin-right: 1rem;
cursor:pointer;
}

svg{
margin:.5rem;
}

}
}

}


`;
export default HomePage
