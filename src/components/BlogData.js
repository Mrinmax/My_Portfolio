import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function BlogData() {
    return (
        <Box to="/">
            Blog items
        </Box>
    )
}

export default BlogData;

const Box = styled(NavLink)`
    width: calc(10rem + 15vw);
    text-decoration: none;
    height: 20rem;
    padding: 1rem;

`