import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme} from './Themes';
import {Design, Develope} from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import Social from '../subComponents/Social';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';


function Skill() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme='light'/>
                <Social theme='light'/>
                <PowerButton />
                <ParticleComponent theme='light' />
                <Main>
                    <Title>
                        <Design width={40} height={40} /> Designer
                    </Title>
                    <Description>
                        I love to create smooth UIs and make myself happy to build awesome websites.
                    </Description>
                    <Description>
                        <strong>I like to Design</strong>
                        <ul>
                            <li>Web Design</li>
                            <li>Mobile Apps</li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>Figma</li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Frontend Developer
                    </Title>
                    <Description>
                        There are three responses to a piece of design — yes, no, and WOW! Wow is the one to aim for!
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>Html, Css, Js, Ts, React, Next, Redux, TailwindCss, Firebase etc.</p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>Vscode, Github, codepen etc.</p>
                        
                    </Description>
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default Skill;

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 2rem;
    width: 30vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;

    font-family: 'Ubuntu Mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }

`

const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-sixe: calc(1em + 1vw);

    ${Main}:hover &{
        &>*{
            fill:${props => props.theme.body};
        }
    }

    &>*:first-child{
        margin-right: 1rem;
    }

`

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6em + 1vw);
    padding: 0.5rem 0;

    ${Main}:hover &{
        color: ${props => props.theme.body};
    }

    strong{
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    ul,p{
        margin-left: 2rem;
    }

`