import React from 'react'
import { MainLayout, InnerLayout } from '../Styles/Layout'
import styled from 'styled-components'
import Title from '../componets/Title'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PrimeButton from '../componets/PrimeButton'
import ContactItem from '../componets/ContactItem'
function ContactPage() {
	const phone = <PhoneIcon />
	const mail = <MailOutlineIcon />
	const location = <LocationOnIcon />
	return (
		<MainLayout>
			<ContactPageStyled>
				<Title title={'Contact'} span={'Contact'} />
				<InnerLayout className={'contact-section'}>
					<div className='left-content'>
						<div className='contact-title'>
							<h4>Get In Tuch</h4>
						</div>
						<form className="form">
							<div className="form-field">
								<label htmlFor="name"  >Enter your name*</label>
								<input type="text" id="name" />
							</div>
							<div className="form-field">
								<label htmlFor="email"  >Enter your email*</label>
								<input type="email" id="email" />
							</div>
							<div className="form-field">
								<label htmlFor="subject"  >Enter your subject</label>
								<input type="text" id="subject" />
							</div>
							<div className="form-field">
								<label htmlFor="text-area">Enter your Message*</label>
								<textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
							</div>
							<div className="form-field f-button">
								<PrimeButton title={'Send Email'} />
							</div>
						</form>
					</div>

					<div className='right-content'>
						<ContactItem
							icon={phone}
							title={'Phone'}
							cont1={'1023456789'}
							cont2={'456987466'}
						/>

						<ContactItem
							icon={mail}
							title={'Email'}
							cont1={'lakthanabca@gmail.com'}
							cont2={'webtech5524@gmail.com'}
						/>

						<ContactItem
							icon={location}
							title={'Address'}
							cont1={'No 11 6th cross schoole street, solinganallur, chennai 119'}
						/>

					</div>
				</InnerLayout>
			</ContactPageStyled>
		</MainLayout>
	)
}
const ContactPageStyled = styled.div`
.contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
           
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    /* background-color:white; */
                    padding:0 .5rem;
                    color: white;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                    color: white;
                }
            }

        }
    }

`
export default ContactPage
