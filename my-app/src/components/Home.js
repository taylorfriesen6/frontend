import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const StyledHome = styled.div`
    background-color: ${pr => pr.theme.lightestColor};
    

    text-align: center;

    img {
        width: 50%;
        border: 5px solid black;
    }
`;

const Home = () => {

    return(
            <StyledHome>
                <div class='home'>
                    <h1>Water My Plants</h1>
                    <p>keep up with your plants :D</p>
                    <div class='links-div'>
                        {/* <Link to="/login">Log In</Link> <Link to="/signup">Sign Up</Link> */}
                        "pic of plants goes here"
                    </div>
                </div>
            </StyledHome>
    )
}
    
export default Home
