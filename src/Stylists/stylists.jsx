// components
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

//assets
import ashLogo from '../Assets/ashLogo.jpg'
import ash from '../Assets/ash.jpg'
import jen from '../Assets/jen.jpg'
import lights from '../Assets/lights.jpg'
import lights2 from '../Assets/lights2.jpeg'
import lights3 from '../Assets/lights3.png'


const Img = styled.img`
height: 60vh;
width: 30vw;
margin: auto;
padding: 25px;
float: left;
animation: fadeIn .5s;
transition: all 2s;
`;
const Divide = styled.div`
 height: 90vh;
 width: 90vw;
 margin: auto;
 padding: 25px;
`;
const Info = styled.p`
font-size: 1.3rem;
color: rgb(183, 174, 157);
font-weight: 400;
line-height: 1.3;
text-indent: 50px;
text-align: right;
initial-letter: 3;
width: 50vw;
margin: 1rem 15rem 10rem 15rem;
`;
const Break = styled.br`
display: block;
margin-bottom: 2rem;
`;
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

const Stylists = () => {

    return (
        <>
            <Divide id="stylists">
                <Img src={ashLogo} alt='harper ash logo' />
                <A href="https://www.instagram.com/harperashsalon/" target="_blank">&nbsp;<FaInstagram />&nbsp;</A>
                <Info>The Salon
                    <Break />
                    <Break />
                    <Break />
                    Lobortis mattis aliquam faucibus purus in massa tempor. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Aliquet bibendum enim facilisis
                    gravida neque convallis. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Est lorem ipsum dolor sit amet consectetur adipiscing. Facilisis volutpat
                    est velit egestas. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Vitae et leo duis ut.
                    Ac ut consequat semper viverra nam libero.
                </Info>
            </Divide>
            <Divide>
                <Img src={ash} alt="ashley" />
                <A href="https://www.instagram.com/platinumashbeauty/" target="_blank">&nbsp;<FaInstagram />&nbsp;</A>
                <Info>Ashley Caruso
                    <Break />
                    Condimentum lacinia quis vel eros donec ac odio tempor. Elementum nibh tellus molestie nunc non. Arcu ac tortor dignissim convallis aenean et. Interdum velit
                    laoreet id donec ultrices tincidunt arcu non sodales. Est lorem ipsum dolor sit amet consectetur adipiscing. Facilisis volutpat
                    est velit egestas. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Vitae et leo duis ut.
                    Ac ut consequat semper viverra nam libero.
                </Info>
            </Divide>
            <Divide>
                <Img src={jen} alt='jen' />
                <A href="https://www.instagram.com/locksbyjen/" target="_blank">&nbsp;<FaInstagram />&nbsp;</A>
                <Info>Jen Ruggles
                    <Break />
                    Non sodales neque sodales ut etiam sit amet nisl purus. Felis imperdiet proin fermentum leo vel. Sem et tortor consequat id porta nibh venenatis cras sed. Dolor sit amet consectetur
                    adipiscing. Morbi tempus iaculis urna id volutpat lacus laoreet. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tortor aliquam nulla facilisi
                    cras fermentum odio. Condimentum lacinia quis vel eros donec ac odio tempor.
                </Info>
            </Divide>
            <Divide>
                <Img src={lights} alt="louie" />
                <A href="https://www.instagram.com/louiedevinehair/" target="_blank">&nbsp;<FaInstagram />&nbsp;</A>
                <Info>Louie Devine
                    <Break />
                    Elementum nibh tellus molestie nunc non. Arcu ac tortor dignissim convallis aenean et. Interdum velit
                    laoreet id donec ultrices tincidunt arcu non sodales. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Amet est placerat in egestas erat. Mi sit amet mauris
                    commodo quis imperdiet massa. Amet luctus venenatis lectus magna fringilla. Fermentum et sollicitudin ac orci phasellus.
                </Info>
            </Divide>
            <Divide>
                <Img src={lights2} alt='tyke' />
                <A href="https://www.instagram.com/tykethebarber/" target="_blank">&nbsp;<FaInstagram />&nbsp;</A>
                <Info>Tyke Hanes
                    <Break />
                    Fames ac turpis egestas maecenas pharetra convallis posuere. Nam aliquam sem et tortor consequat. Purus in massa tempor
                    nec. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Eget lorem dolor sed viverra ipsum nunc
                    aliquet. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Risus pretium quam vulputate dignissim suspendisse.
                </Info>
            </Divide>
            <Divide>
                <Img src={lights3} alt='afsaneh' />
                <A href="https://www.instagram.com/hairbyafsaneh4/" target="_blank">&nbsp;<FaInstagram />&nbsp;</A>
                <Info>Afsaneh Abdi
                    <Break />
                    Fames ac turpis egestas maecenas pharetra convallis posuere. Nam aliquam sem et tortor consequat. Purus in massa tempor
                    nec. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Eget lorem dolor sed viverra ipsum nunc
                    aliquet. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Risus pretium quam vulputate dignissim suspendisse.
                </Info>
            </Divide>
        </>
    )
}
export default Stylists