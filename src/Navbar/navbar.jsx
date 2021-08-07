import styled from "styled-components";
import { useHistory } from "react-router";
import { useState } from "react";
import { FaBars } from 'react-icons/fa';

const Bar = styled.div`
  height: 14vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
`;
/*const List = styled.li`
  margin-bottom: 2rem;
  text-decoration: uppercase;
  list-style-type: none;
`;
const Unordered = styled.ul`
margin-bottom: 2rem;
  text-decoration: uppercase;
  list-style-type: none;
  display: block;
  text-align: center;
`*/
const Words = styled.h4`
  font-size: 2rem;
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
    transform: scale(1.2);
  }
  &:visited { 
    color: rgb(254, 224, 200);
  }
`;
const A = styled.a`
  font-size: 2rem;
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
    transform: scale(1.2);
  }
  &:visited { 
    color: rgb(254, 224, 200);
  }
`;

const Navbar = () => {


  const history = useHistory();

  const navToStylists = () => {
    history.push("/stylists");
  };
  const navToHome = () => {
    history.push("/home");
  };
  const navToPricing = () => {
    history.push("/pricing");
  };
  const navToInspo = () => {
    history.push("/inspiration");
  };
  const navToAppointments = () => {
    history.push("/appointments");
  };

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open)

  return (
    <>
      <FaBars role={'button'} onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)} className={"menu-icon"}>
        <Bar>
          <Words onClick={navToHome}><A href="#home">Home</A></Words>
          <Words onClick={navToStylists}><A href="#stylists">Stylists</A></Words>
          <Words onClick={navToInspo}><A href="#inspo">Inspiration</A></Words>
          <Words onClick={navToPricing}><A href="#price">Pricing</A></Words>
          <Words onClick={navToAppointments}><A href="#appointments">Appointments</A></Words>
        </Bar>
      </FaBars>
    </>
  )
}

export default Navbar;