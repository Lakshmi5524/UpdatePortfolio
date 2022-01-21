import { MainLayout, InnerLayout } from '../Styles/Layout'
import styled from 'styled-components'
import Title from '../componets/Title'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../componets/ContactItem'
import emailjs from 'emailjs-com'
import React,{useState,useRef} from 'react'

function ContactPage() {
    const formRef = useRef();
    const [done, setDone] = useState(false)
	const phone = <PhoneIcon />
	const mail = <MailOutlineIcon />
	const location = <LocationOnIcon />

    const handileSumit = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			'service_63cus2w',
			'template_7x9g8e8',
			formRef.current,
			'user_HodvhoRK0zXwYTw70wacx')
			.then((result) => {
				console.log(result.text);
				setDone(true)
			}, (error) => {
				console.log(error.text);

			}
			);

	}

	return (
		<MainLayout>
			<ContactPageStyled>
				<Title title={'Contact'} span={'Contact'} />
				<InnerLayout className={'contact-section'}>
					<div className='left-content'>
						<div className='contact-title'>
							<h4>Get In Tuch</h4>
						</div>
						<form ref={formRef} className="form" onSubmit={handileSumit}>
							<div className="form-field">
								<label htmlFor="user_name">Enter your name*</label>
								<input type="text" id="name" placeholder="Name" name="user_name" />
							</div>
							<div className="form-field">
								<label htmlFor="user_email">Enter your email*</label>
								<input type="email" id="email" placeholder="Email" name="user_email"/>
							</div>
							<div className="form-field">
								<label htmlFor="user_subject">Enter your subject</label>
								<input type="text" id="subject" placeholder="Subject" name="user_subject"/>
							</div>
							<div className="form-field">
								<label htmlFor="message">Enter your Message*</label>
								<textarea name="textarea" id="textarea" cols="30" rows="10" placeholder="Message" name="message"></textarea>
							</div>
							<div className="form-field f-button">
                                <button>Submit</button>
						         {done && "Thank you..."}
							</div>
						</form>
					</div>

					<div className='right-content'>
						<ContactItem
							icon={phone}
							title={'Phone'}
							cont1={'7397330045'}
							cont2={'9444646776'}
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
                    color:var(--white-color);
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color:var(--white-color);
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                    color:var(--white-color);
                }
            }

        }
    }

    button{
        width:150px;
        height:60px;
      

    }

`
export default ContactPage
