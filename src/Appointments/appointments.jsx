import styled from 'styled-components';
import { FaPhoneAlt, FaMapMarkedAlt, FaCalendarCheck } from 'react-icons/fa';


const Widget = styled.div`
font-size: 1.5rem;
color: rgba(79, 68, 60, .7)
line-height: 2rem;
padding 18px 10px 8px;
text-align: center;
box-sizing: border-box;
`

const A = styled.a`
  font-size: 1.5rem;
  color: rgb(183, 174, 157);
  font-weight: 900px;
  padding: 25px;
  margin: 5px;
  text-decoration: none;
  animation: fadeIn 5s, scaleCenter 5s;
  &:active{
    color: rgb(220, 174, 140);
  }
  &:hover {
    color: rgb(79, 68, 60);
    cursor: pointer;
    transform: scale(2);
  }
  &:visited { 
    color: rgba(79, 68, 60, .05);
  }
`;

const Appointments = () => {

    return (

        <Widget>Walk ins welcome, appointments preferred.<br />
            Hours:<br />
            Sunday.................................Closed<br />
            Monday................................Closed<br />
            Tuesday............10:00AM - 6:00PM<br />
            Wednesday.......10:00AM - 6:00PM<br />
            Thursday..........10:00AM - 6:00PM<br />
            Friday...............10:00AM - 6:00PM<br />
            Saturday...........10:00AM - 4:00PM<br /><br />
            <A href="https://goo.gl/maps/fy98dAs4kQ5jLfPr7">&nbsp;&nbsp;<FaMapMarkedAlt />&nbsp;&nbsp;410 Burkitt Commons Ave. Nolensville, TN 37135</A><br /><br />
            <A href="tel:6152838922"><FaPhoneAlt />&nbsp;&nbsp;(615)283-8922</A><br /><br />
            <A href="www.vagaro.com/us04/harperashsalon" target="_blank">&nbsp;<FaCalendarCheck />&nbsp;Book Your Appointment Today!</A>
        </Widget>

    )
}
export default Appointments