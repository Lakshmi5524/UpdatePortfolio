import React from 'react'
import styled from "styled-components";
import Title from '../componets/Title';
import ImageSection from '../componets/ImageSection'
import ServiceSection from '../componets/ServiceSection'
import ReviewSection from '../componets/ReviewSection'
import { MainLayout } from '../Styles/Layout'


function AboutPage() {
	return (
		<MainLayout>
			<AboutStyled>
				<Title title={'About Me'} span={'About me'} />
				<ImageSection />
				<ServiceSection />
				<ReviewSection />
			</AboutStyled>
		</MainLayout>


	)
}
const AboutStyled = styled.section`
h1{
color: white;
}
`
export default AboutPage
