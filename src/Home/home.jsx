// react imports
/*import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
*/

// components
import styled from 'styled-components';
import Navbar from '../Navbar/navbar';
import Stylists from '../Stylists/stylists';
import Inspiration from '../Inspiration/inspiration';
import Pricing from '../Pricing/pricing';
import Appointments from '../Appointments/appointments';
import Footer from '../Footer/footer';
import lights from '../Assets/OOOHlights.jpg'

//assets

import harperash from '../Assets/harperash.jpg'



const Img = styled.img`
height: 50vh;
width: auto;
margin: 25px auto;
padding: 50px;
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
initial-letter: 3;
`;

const Home = () => {
    //const history = useHistory();

    return (
        <>
            <Navbar />
            <Divide>
                <Img src={harperash} alt='harper ash logo' id="home" />
            </Divide>
            <Divide style={{ backgroundImage: `${lights}`, opacity: 0.3 }}>
                <Info>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt.
                    Velit sed ullamcorper morbi tincidunt ornare massa. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Diam donec adipiscing tristique risus nec. Ut etiam sit amet
                    nisl purus in. Purus sit amet luctus venenatis lectus magna fringilla urna. Tempor orci dapibus ultrices in iaculis nunc sed augue.
                </Info>
                <Info>
                    Non sodales neque sodales ut etiam sit amet nisl purus. Felis imperdiet proin fermentum leo vel. Sem et tortor consequat id porta nibh venenatis cras sed. Dolor sit amet consectetur
                    adipiscing. Morbi tempus iaculis urna id volutpat lacus laoreet. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tortor aliquam nulla facilisi
                    cras fermentum odio. Condimentum lacinia quis vel eros donec ac odio tempor. Elementum nibh tellus molestie nunc non. Arcu ac tortor dignissim convallis aenean et. Interdum velit
                    laoreet id donec ultrices tincidunt arcu non sodales. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Amet est placerat in egestas erat. Mi sit amet mauris
                    commodo quis imperdiet massa. Amet luctus venenatis lectus magna fringilla. Fermentum et sollicitudin ac orci phasellus.
                </Info>
                <Info>
                    Ultricies lacus sed turpis tincidunt. Risus pretium quam vulputate dignissim suspendisse in est ante in. Arcu felis bibendum ut tristique et egestas quis. Mi proin sed libero enim.
                    Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Fames ac turpis egestas maecenas pharetra convallis posuere. Nam aliquam sem et tortor consequat. Purus in massa tempor
                    nec. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Eget lorem dolor sed viverra ipsum nunc
                    aliquet. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Risus pretium quam vulputate dignissim suspendisse.
                </Info>
            </Divide>
            <Stylists />
            <Inspiration />
            <Pricing />
            <Appointments />
            <Footer />
        </>
    )
}
export default Home
/*<Img src={ashLogo} alt="logo" />*/