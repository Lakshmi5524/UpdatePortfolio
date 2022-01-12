import styled from 'styled-components'
import React from 'react'
import {MainLayout,InnerLayout} from '../Styles/Layout'
import Title from '../componets/Title'
import ProgressBar from '../componets/ProgressBar'

function Skills() {
    return (
        <Skillstyled>
             <Title title={'My Skills'} span={'My Skills'}/>
             <InnerLayout>
                <div className='skills'>
                     <ProgressBar
                      title={'HTML'}
                       width={'20%'}
                       text={'70%'}
                     />

                    <ProgressBar
                      title={'CSS'}
                       width={'30%'}
                       text={'65%'}
                     />

                    <ProgressBar
                      title={'JavaScript'}
                       width={'40%'}
                       text={'60%'}
                     />


                    <ProgressBar
                      title={'React Js'}
                       width={'15%'}
                       text={'80%'}
                     />


                     <ProgressBar
                      title={'NodeJs'}
                       width={'40%'}
                       text={'50%'}
                     />

                     
                    <ProgressBar
                      title={'MONGODB'}
                       width={'40%'}
                       text={'50%'}
                     />

                </div>
             </InnerLayout>

        </Skillstyled>
    )
}

const Skillstyled=styled.section`
.skills{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-row-gap:2rem;
    grid-column-gap:3rem;
}

`

export default Skills
