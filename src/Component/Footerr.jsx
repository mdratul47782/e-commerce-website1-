import React from 'react'
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { mdiFacebook, mdiTwitter, mdiGoogle, mdiInstagram, mdiLinkedin, mdiGithub } from '@mdi/js';

const Footer = () => {
    return (
        <>
            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
                <MDBContainer className='pt-4'>
                    <section className='mb-4'>
                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon={mdiFacebook} />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon={mdiTwitter} />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon={mdiGoogle} />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon={mdiInstagram} />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon={mdiLinkedin} />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon={mdiGithub} />
                        </MDBBtn>
                    </section>
                </MDBContainer>

                <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 Copyright:
                    <a className='text-dark' href='https://mdbootstrap.com/'>
                        SHOPCART.com
                    </a>
                </div>
            </MDBFooter>
        </>
    )
}

export default Footer
