import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';


const StyledHome = styled.div`
  position: absolute;
  width: 570px;
  height: 589px;
  left: 435px;
  top: 265px;

  background: #FFFFFF;
  box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);
`;

// const StyledPika = styled.div`
//     background-image: url(${props => props.img});
// `;

const Home = () => {

    return(
            <StyledHome>
                <div class='home'>
                    <h1>WMP 💦</h1>
                    <p>keep up with your plants :D</p>
                    <div>
                        "pic of plants goes here"
                    </div>
                </div>
            </StyledHome>
    )
}
    
export default Home
