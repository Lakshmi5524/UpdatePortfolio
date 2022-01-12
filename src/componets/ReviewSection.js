import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/Layout'
import Title from '../componets/Title'
import ReviewItem from '../componets/ReviewItem'
const ReviewSection = () => {
	return (

		<ReviewsectionStyled>
			<Title title={'Review'} span={'Reviews'} />
			<InnerLayout>
				<div className='reviews'>
					<ReviewItem text={'In the Front End, idea genesis, opportunity validation, and concept development are dynamic and consists of adaptive interactions between involved participants with varied skills. They create, evaluate, analyze and iterate many alternatives and external technologies into potential breakthrough opportunities.'} />


					<ReviewItem text={'In the Front End, idea genesis, opportunity validation, and concept development are dynamic and consists of adaptive interactions between involved participants with varied skills. They create, evaluate, analyze and iterate many alternatives and external technologies into potential breakthrough opportunities.'} />

				</div>
			</InnerLayout>

		</ReviewsectionStyled >

	)
}

const ReviewsectionStyled = styled.section`
.reviews{
display:flex;

}
`

export default ReviewSection
