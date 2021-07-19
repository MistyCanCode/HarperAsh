import styled from "styled-components";
import misty from '../Assets/logo-transparent.png'
import { FaPhoneAlt, FaMapMarkedAlt, FaCalendarCheck, FaInstagram } from 'react-icons/fa';

const FooterSection = styled.footer`
display: flex;
flex-direction: row;
position: relative;
left: 0;
bottom: 0;
width: 100vw;
height: 25px;
justify-content: space-between;
text-align: center;
padding: 10px 0;
background-color: rgb(246, 237, 228);
color: rgb(79, 68, 60);
border-top: 2px solid rgba(79, 68, 60, .5);
`
const InsideFooter = styled.div`
flex-direction: row;
font-size 1.5rem;
font-weight: 250;
justify-content: space-around;
align-items:center;
height: 90px;
width: 30%;
`

const A = styled.a`
text-decoration: none;
color: rgb(79, 68, 60);
padding: 5px;
margin-top: 10px;
text-decoration: none;
animation: fadeIn 5s, scaleCenter 5s;
&:active{
color: rgb(220, 174, 140);
}
&:hover {
color: rgb(79, 68, 60);
cursor: pointer;
transform: scale(1.2);
}
&:visited { 
color: rgba(79, 68, 60, .05);
}
`
const Misty = styled.p`
font-size: 1rem;
font-weight: 200;
color: rgb(51, 6, 96);
`
const MyImage = styled.img`
height: 90%;
width: auto;
padding: 5px;
margin: 5px auto;
`
const year = new Date().getFullYear();

const Footer = () => {
    return (
        <FooterSection>
            <InsideFooter>
                <A href="https://goo.gl/maps/fy98dAs4kQ5jLfPr7">&nbsp;&nbsp;<FaMapMarkedAlt />&nbsp;</A>
            </InsideFooter>
            <InsideFooter>
                <A href="tel:6152838922"><FaPhoneAlt />&nbsp;&nbsp;&nbsp;</A><br />
            </InsideFooter>
            <InsideFooter>
                <A href="www.vagaro.com/us04/harperashsalon" target="_blank">&nbsp;<FaCalendarCheck />&nbsp;</A>
            </InsideFooter>
            <InsideFooter>
                <A href="https://www.instagram.com/harperashsalon/" target="_blank">&nbsp;<FaInstagram />&nbsp;</A>
            </InsideFooter>
            <InsideFooter>
                <Misty>Site created by {' '}<A href="mailto:mistycancode@gmail.com">Misty</A>&nbsp;{year}</Misty>
                <A href="https://codepen.io/MistyCanCode/pen/PopBJMx" ><MyImage src={misty} alt="misty cc logo" /></A>
            </InsideFooter>
        </FooterSection>
    )

}
export default Footer