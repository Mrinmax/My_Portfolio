import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import {DarkTheme} from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import Social from '../subComponents/Social';
import PowerButton from '../subComponents/PowerButton';
import { Work } from '../data/WorkData';
import Card from '../subComponents/Card';


function Project() {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <Social theme='dark'/>
                <PowerButton />

                <Main>
                    {
                        Work.map( d =>
                            <Card key={d.id} data={d} />   
                        )
                    }
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default Project;

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;

`

const Main = styled.div`
    position: fixed;
    top: 12rem;
    left: calc(10rem + 15vw);
    height: 40vh;
    display: flex;
    color: white;

`