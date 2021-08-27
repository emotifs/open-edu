import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Alimurodov Dilbek</Footer.Link>
                    <Footer.Link href="#">Jumanazarov Ravshan</Footer.Link>
                    <Footer.Link href="#">𝘔𝘶𝘩𝘢𝘮𝘦𝘥𝘰𝘷 𝘔𝘶𝘩𝘢𝘮𝘮𝘢𝘥𝘫𝘰𝘯</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="https://t.me/Ravshanbek_Jumanazarov">Reklama</Footer.Link>
                    <Footer.Link href="https://t.me/DilbekAlimurodov">Development</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/jumanazarovravshan66/">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">+998 94 665 18 81</Footer.Link>
                    <Footer.Link href="https://www.google.com/maps/place/Qoraqamish+1%2F3,+%D0%A2%D0%BE%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+O%60zbekiston/@41.358402,69.225111,16z/data=!3m1!4b1!4m5!3m4!1s0x38ae8c5cc249b9af:0xc6e6cd9540b1b9f5!8m2!3d41.3588128!4d69.2296439">Uzbekistan</Footer.Link>
                    <Footer.Link href="jumanazarovravshan66@gmail.com">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.facebook.com"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/jumanazarovravshan66/"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://www.youtube.com"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="https://www.twitter.com"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}

export default FooterContainer;