import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components';
import {DarkTheme} from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import Social from '../subComponents/Social';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';

import astronaut from '../assets/Images/spaceman.png';

function About() {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <Social theme='dark'/>
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>
                <Main>
                I'm a front-end developer based in Kolkata. I love to create simple yet beautiful websites with great user experience.
                <br /> <br />
                I'm interested in the whole frontend stack Like trying new things and building great projects.
                <br /> <br />
                A language that doesn’t affect the way you think about programming is not worth knowing. You can connect with me via social links.
                </Main>
               
            </Box>
        </ThemeProvider>
    )
}

export default About;

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;

`

const float = keyframes`
    0% { transform: translateY(-10px) }
    50% { transform: translateY(15px) translateX(15px) }
    100% { transform: translateY(-10px) }
`

const Spaceman = styled.div`
    position: absolute;
    top: 10%;
    right: 5%;
    width: 20vw;
    animation: ${float} 4s ease infinite;

    img{
        width: 100%;
        height: auto;
    }

`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2rem;
    width: 50vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);

    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;

    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;

`

