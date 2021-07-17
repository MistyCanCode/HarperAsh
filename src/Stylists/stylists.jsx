// components
import styled from 'styled-components';


//assets
import ashLogo from '../Assets/ashLogo.jpg'
import ash from '../Assets/ash.jpg'
import jen from '../Assets/jen.jpg'
import ashNjen from '../Assets/ashNjen.jpg'


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

const Stylists = () => {

    return (
        <>
            <Divide id="stylists">
                <Img src={ashLogo} alt='harper ash logo' />
                <Info>
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
                <Img src={ashNjen} alt='ashley and jen' />
                <Info>
                    <Break />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt.
                    Velit sed ullamcorper morbi tincidunt ornare massa. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Diam donec adipiscing tristique risus nec. Ut etiam sit amet
                    nisl purus in. Purus sit amet luctus venenatis lectus magna fringilla urna. Tempor orci dapibus ultrices in iaculis nunc sed augue. Tincidunt nunc pulvinar sapien et ligula
                    ullamcorper malesuada. Arcu non odio euismod lacinia at quis. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Blandit aliquam etiam erat velit. Et magnis dis
                    parturient montes nascetur. Convallis posuere morbi leo urna. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum.
                </Info>
            </Divide>
            <Divide>
                <Img src={ash} alt="ashley" />
                <Info>
                    <Break />
                    Non sodales neque sodales ut etiam sit amet nisl purus. Felis imperdiet proin fermentum leo vel. Sem et tortor consequat id porta nibh venenatis cras sed. Dolor sit amet consectetur
                    adipiscing. Morbi tempus iaculis urna id volutpat lacus laoreet. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tortor aliquam nulla facilisi
                    cras fermentum odio. Condimentum lacinia quis vel eros donec ac odio tempor. Elementum nibh tellus molestie nunc non. Arcu ac tortor dignissim convallis aenean et. Interdum velit
                    laoreet id donec ultrices tincidunt arcu non sodales. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Amet est placerat in egestas erat. Mi sit amet mauris
                    commodo quis imperdiet massa. Amet luctus venenatis lectus magna fringilla. Fermentum et sollicitudin ac orci phasellus.
                </Info>
            </Divide>
            <Divide>
                <Img src={jen} alt='jen' />

                <Info>
                    Ultricies lacus sed turpis tincidunt. Risus pretium quam vulputate dignissim suspendisse in est ante in. Arcu felis bibendum ut tristique et egestas quis. Mi proin sed libero enim.
                    Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Fames ac turpis egestas maecenas pharetra convallis posuere. Nam aliquam sem et tortor consequat. Purus in massa tempor
                    nec. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Eget lorem dolor sed viverra ipsum nunc
                    aliquet. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Risus pretium quam vulputate dignissim suspendisse.
                </Info>
            </Divide>
        </>
    )
}
export default Stylists