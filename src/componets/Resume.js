import React from 'react'
import styled from 'styled-components'
import Title from '../componets/Title'
import {InnerLayout,  MainLayout} from '../Styles/Layout'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmallTitle from '../componets/SmallTitle'
import ResumeItem from '../componets/ResumeItem'
import SchoolIcon from '@material-ui/icons/School';
function Resume() {
    const briefcase= <BusinessCenterIcon/>
    const school= <SchoolIcon/>
    return (
       
        <ResumeStyled>
            <Title title={'Resume'}span={'Resume'}/>
                <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                  <ResumeItem  
                  year={'June 2021-2021 Act '}
                  title={'Full Stack Program'}
                  subTitle={"Guvi Geek Network Pvt. Ltd"}
                  text={"I have been Coding for around 6 months now. I look back to those days where it all began from blank screens to beautiful websites/web application nowadays and that's how far I have grown now I Love to create full stack applications using MERN stack preferably"}
                  />
                
                  <ResumeItem 
                  year={'Nuv 2019-2021 May '}
                  title={'Helpdesk Executive'}
                  subTitle={'Inspirisys Solution Private Limited.'}
                  text={"Incident logging and troubleshooting.Assigning to respective Engineers.Customer coordination and handling the escalations.Preparing & maintaining the documents and reports for daily, weekly"}
                  
                  />

                 <div className="small-title  u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>

                 <ResumeItem 
                  year={'2015-2018'}
                  title={'BCA-Computer Application'}
                  subTitle={'Hindustan College of Arts and Science'}
                  text={'71%'}
                  
                  />

                <ResumeItem 
                  year={'2013-2015'}
                  title={'HSC'}
                  subTitle={'Joseph’s Higher Secondary School'}
                  text={'68%'}
                  
                  />

                 <ResumeItem 
                  year={'2012-2013'}
                  title={'SSLC'}
                  subTitle={'Joseph’s Higher Secondary School'}
                  text={"70%"}
                  
                  />
                </div>
                </InnerLayout>
            </ResumeStyled>
           
    )
}
const ResumeStyled=styled.section`
.small-title{
        padding-bottom: 3rem;
        
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }



`;
export default Resume
