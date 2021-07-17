// components
import styled from 'styled-components';
import Navbar from '../Navbar/navbar';


//assets

import harperash from '../Assets/harperash.jpg'



const Img = styled.img`
height: 25vh;
width: auto;
margin: 10px auto;
padding: 25px;
float: left;
`;
const Photo = styled.img`
animation: fadeIn .8s, scaleCenter .8s;
height: 25vh;
width: auto;
margin: 10px auto;
padding: 25px;
float: left;
`;
const Divide = styled.div`
display: flex;
flex-direction: column;
width: 90vw;
margin: 10px auto;
padding: 25px;
overflow: auto;
`;
const Info = styled.p`
font-size: 1.5rem;
color: rgb(183, 174, 157);
font-weight: 400;
line-height: 1.3;
text-indent: 50px;
`;

const Inspiration = () => {

    const Photos = [
        { image: { harperash } },
        { name: "", text: "hair", image: "https://www.instagram.com/p/CQRe1IFHmJ8/" },
        { name: "", text: "special occasion", image: "https://www.instagram.com/p/COQpJVAnhKm/" },
        { name: "", text: "redhead", image: "https://www.instagram.com/p/CNDSoLaH9zK/" },
        { name: "", text: "salon", image: "https://www.instagram.com/p/CJbdl33HRve/" },
        { name: "", text: "book now", image: "https://www.instagram.com/p/CKAXN5eHLNc/" },
    ]

    return (
        <>
            <Divide id="inspo">

            </Divide>
        </>
    )
}
export default Inspiration