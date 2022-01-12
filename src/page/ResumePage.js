import React from 'react'
import Skills from '../componets/Skills'
import Resume from '../componets/Resume'
import {InnerLayout,  MainLayout} from '../Styles/Layout'

function ResumePage() {
	return (
		<MainLayout>
			<Skills/>
			<Resume/>
		</MainLayout>
	)
}

export default ResumePage
