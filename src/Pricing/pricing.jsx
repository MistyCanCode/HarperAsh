// components
import styled from 'styled-components';


//assets


const Background = styled.div`
height: 170vh;
width: 100vw;
margin:auto;
`
/*&:before {
content: "";
background-image: url(${lace});
opacity: 0.09;
background-size: 100%;
position: absolute;
top: 0px;
right: 0px;
bottom: 0px;
left: 0px;
}*/

const Divide = styled.div`
height: 35vh;
width: 90vw;
margin: auto;
padding: 25px;
`;
const Words = styled.h4`
font-size: 2rem;
color: rgba(183, 174, 157, 1);
font-weight: 900px;
padding: 25px;
margin: 5px auto;
text-align: center;
`
const List = styled.ul`
display: flex;
flex-direction: column;
font-size: 1.5rem;
line-height: 1.5rem;
color: rgba(183, 174, 157, 1);
font-weight: 400;
list-style-type: none;
text-align: justify;
padding-left: 175px;
margin: 5px auto;
width: 50vw;
`;
const Item = styled.li`
justify-content: space-between;
font-size: 1.5rem;
line-height: 1.5rem;
color: rgba(183, 174, 157, 1);
font-weight: 400;
list-style-type: none;
text-align: justify;
margin: 5px auto;
width: 50vw;
`;
const Break = styled.br`
display: block;
margin-bottom: 2rem;
`;

const Pricing = () => {

    return (
        <>
            <Background>
                <Divide id="price">
                    <Words>Cut and Style</Words>
                    <Break />
                    <List>
                        <Item>Women's Haircut.........................................$ 55 +</Item>
                        <Item>Men's Haircut..............................................$ 35 +</Item>
                        <Item>Blowout.......................................................$ 45 +</Item>
                        <Item>Deep Conditionining Treatment..................$ 30 +</Item>
                        <Item>Special Occasion.........................................$ 75 +</Item>
                    </List>

                    <Break />

                    <Words>Color</Words>
                    <Break />
                    <List>
                        <Item>Full Highlight.............................................$ 150 +</Item>
                        <Item>Partial Highlight.........................................$ 95 +</Item>
                        <Item>Balayage.....................................................$ 150 +</Item>
                        <Item>Full Color...................................................$ 100 +</Item>
                        <Item>Color Retouch............................................$ 75 +</Item>
                        <Item>Men's Color................................................$ 50 +</Item>
                        <Item>Toner..........................................................$ 25 +</Item>
                        <Item>Bleach and Color Correction.....................$ 125/hr +</Item>
                    </List>
                </Divide>
            </Background>
        </>
    )
}
export default Pricing