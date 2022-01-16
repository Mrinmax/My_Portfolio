import React from 'react'
import styled from 'styled-components';
import img from '../assets/Images/books.jpg';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import Social from '../subComponents/Social';

// import {Blogs} from '../data/BlogData';
// import BlogData from './BlogData';



function Blog() {
    return (
        <MainContainer>
            <Container>
                <LogoComponent />
                <PowerButton />
                <Social />
                <Center>

                    <h1>Comming Soon...</h1>


                    {/* <Grid>
                        {
                            Blogs.map(blog =>{
                                return <BlogData key={blog.id} blog={blog} />
                            })
                        }
                    </Grid> */}
                </Center>
            </Container>
        </MainContainer>
    )
}

export default Blog;

const MainContainer = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    width: 100vw;
    

`


const Container = styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
    width: 100%;
    height: 100vh;
    position: relative;
    padding-bottom: 5rem;
    overflow: hidden;
    

`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20rem;
    

`

// const Grid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
//     grid-gap: calc(1rem + 2vw);


// `