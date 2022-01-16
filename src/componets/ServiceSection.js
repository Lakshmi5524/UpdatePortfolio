import React from 'react'
import { InnerLayout } from '../Styles/Layout'
import styled from 'styled-components'
import Title from '../componets/Title'
import ServiceCard from '../componets/ServiceCard'
import desing from '../img/webdesign.jpeg'
import frontend from '../img/front.jpeg'
import responce from '../img/mobileres.jpeg'

const ServiceSection = () => {
	return (
		<InnerLayout>
			<ServiceSectioStyled>
				<Title title={'Services'} span={'services'} />
				<div className='service'>
					<ServiceCard
						image={desing}
						title={'Web Desing'}
						paragraph={'The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design'}
					/>

					<ServiceCard
						image={frontend}
						title={'Front-End Desing'}
						paragraph={'Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly'}
					/>

					<ServiceCard
						image={responce}
						title={'Responsive Design'}
						paragraph={'Responsive design is a graphic user interface (GUI) design approach used to create content that adjusts smoothly to various screen sizes. Designers size elements in relative units (%) and apply media queries, so their designs can automatically adapt to the browser space to ensure content consistency across devices.'}
					/>
				</div>
			</ServiceSectioStyled>
		</InnerLayout>
	)
}
const ServiceSectioStyled = styled.section`
.service{
	margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
		justify-content:center;
		@media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }

}
`
export default ServiceSection
