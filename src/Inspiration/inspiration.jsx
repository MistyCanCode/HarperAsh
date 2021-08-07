// components
import styled from 'styled-components';


//assets

import harper from '../Assets/harperash.jpg'
import zero from '../Assets/zero.jpg'
import one from '../Assets/one.jpg'
import two from '../Assets/two.jpg'
import three from '../Assets/three.jpg'
import four from '../Assets/four.jpg'
import five from '../Assets/five.jpg'
import six from '../Assets/six.jpg'
import seven from '../Assets/seven.jpg'

const Photo = styled.div`
animation: fadeIn .8s, scaleCenter .8s;
height: 25vh;
width: auto;
margin: 10px auto;
padding: 25px;
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



    return (
        <>
            <Divide id="inspo">
                <Photo src={harper} />
                <Info>Whether you want to be a blond bombshell or a fiery redhead we've got you covered.</Info>
                <Photo src={zero} />
                <Info>Need some inspiration?</Info>
                <Photo src={one} />
                <Photo src={two} />
                <Photo src={three} />
                <Photo src={four} />
                <Photo src={five} />
                <Photo src={six} />
                <Photo src={seven} />
            </Divide>
        </>
    )
}
export default Inspiration