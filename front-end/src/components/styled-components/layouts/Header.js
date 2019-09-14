import React from 'react'
import logo from '../../../scoutbase-logo.png';
import styled from 'styled-components'
import {elevation, fixed,above,below} from '../utilites'
import {Link} from 'react-router-dom'
const Header = ({className}) => {
    return (
        <header className={className} >
        <a href="http://www.scoutbase.com"><img src={logo}  alt="logo" /></a>
       <Link to={'/'} style={{textDecoration:'none'}}> <h2>ScoutBase Coding Chalange</h2></Link>
        </header>
    )
}


export default styled(Header)`
background:#6E3663;
${above.med`
img {
    width:150px;
}
`}
${fixed()}
width:100%;
padding:10px 5%;
display: inline-grid;
grid-template-columns: 30% 30%;
grid-gap: 40%;
justify-items: start;
  align-items: center;
  z-index:100;
  img {
    ${below.large`

width:100px;

`}
    width:150px;
}
h2{
    ${below.large`

font-size:1rem;

`}
${below.med`
font-size:.6rem;

`}
    color:white;
    align-content:center;
}
${elevation[2]};
`

