import React from 'react'
import styled from 'styled-components'
import pic from '../img/pic2.jpg'
import PrimeButton from '../componets/PrimeButton'

const ImageSection = () => {
	return (
		<ImageSectionStyled>
			<div className='left-content'>
				<img src={pic} alt="my pic" />
			</div>
			<div className='right-content'>
				<h4>I am <span>Lakshmi</span></h4>
				<p className="paragraph">
					Intended to structure my growth in pace with the ever-changing corporate environment. Make my
					learning curve to move in a linear fashion along with the growth of functional skills coupled with overall
					personality development to face the challenging times ahead
				</p>
				<div className='about-info'>
					<div className='info-title'>
						<p>Full Name</p>
						<p>D.O.B</p>
						<p>Nationality</p>
						<p>Language</p>
						<p>Location</p>
						<p>Service</p>
						<p>Hobbies</p>
					</div>

					<div className='info'>
						<p>: Lakshmi Saravanan</p>
						<p>: 10/03/1998</p>
						<p>: Indian</p>
						<p>: Tamil,Engilsh,Telugu</p>
						<p>: Sollinganallur,Chennai</p>
						<p>: Webdeveloper</p>
						<p>: Learning new things from YouTube and Dancing</p>
					</div>
				</div>
				<PrimeButton title={'Download'} />
			</div>
		</ImageSectionStyled>
	)
}

const ImageSectionStyled = styled.div`
margin-top:5rem;
display: flex;
.left-content{
width:100%;
img{
width:90%;
height:100%;
object-fit:cover;

}
}
.right-content{
h4{
font-size:2rem;
color:var(--white-color);
span{
font-size:2rem;
}
}
.paragraph{
padding:1rem 0;
color:var(--white-color)
}

.about-info{
display:flex;
padding-bottom:1.4rem;
.info-title{
padding-right:3rem;
p{
font-weight:400;
}
}
.info-title,.info{
p{
padding:.3rem 0;
color:var(--white-color)
}
}
}

}

`
export default ImageSection
