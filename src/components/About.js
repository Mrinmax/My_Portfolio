import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
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

const Spaceman = styled.div`
    position: absolute;
    top: 10%;
    right: 5%;
    width: 20vw;

    img{
        width: 100%;
        height: auto;
    }


`

