import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme} from './Themes';
import {Design, Develope} from './AllSvgs';


function Skill() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <Main>
                    <Title>
                        <Design width={40} height={40} />Designer
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
                </Main>
                <Main>
                    <Title>
                        <Develope width={40} height={40} />Frontend Developer
                    </Title>
                    <Description>
                        There are three responses to a piece of design — yes, no, and WOW! Wow is the one to aim for!
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>Html, Css, Js, Ts, React, Next, Redux, TailwindCss, Firebase etc.</p>
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

`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-sixe: calc(1em + 1vw);

`

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6em + 1vw);
    padding: 0.5rem 0;

`