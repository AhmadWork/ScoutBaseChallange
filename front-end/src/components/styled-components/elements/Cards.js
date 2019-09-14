import styled from 'styled-components'
import { elevation,below } from '../utilites'
import {animated} from 'react-spring'


export const Card = styled.div`
text-decoration: none;
width: 450px;
height: 250px;
${below.med`
width: 350px;
height:250px;
margin: 1rem;
left: 25%;
`}
background: linear-gradient(#E96874, #6E3663, #2B0830);
box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
border-radius: 6px;
overflow: hidden;
margin: 1.5rem;
position: absolute;
top: 30%;
left: 35%;
-webkit-transform: translate(-50%, -50%);
h1 {
    ${below.med`

margin: 1rem;
font-size:2rem;
margin-top:100px;
`}
font-size:3rem;
  color:#fff;
  margin-top:100px;
text-align: center;
text-decoration: none;

}
${elevation[2]}
`;

export const AnimatedCard=animated(Card)

export const CountryCard =styled.div`

position: relative;
  margin: 89px auto;
  height: 350px;
  width: 600px;
  text-align: center;
  background: linear-gradient(#E96874, #6E3663, #2B0830);
  border-radius: 2px;
  box-shadow: 0 6px 12px -3px rgba(0,0,0,.3);
  color: #fff;
  padding: 30px;
  ${below.med`
    height: 250px;
  width: 400px;
  `}

h1 {
  font-size: 60px;
  ${below.med`
   font-size: 40px;

  `}
}
h3 {
  font-size: 26px;
  ${below.med`
   font-size: 13px;

  `}
}
a{
    text-decoration:none;
    color:#fff;
}

 header {
  position: absolute;
  top: 31px;
  left: 0;
  width: 100%;
  padding: 0 10%;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}

 header > *:first-child {
  text-align: left;
}
header > *:last-child {
  text-align: right;
}


.announcement {
  position: relative;
  border: 3px solid currentColor;
  border-top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4 {
  margin: .15em 0;
}



.center {
  font-size: 20px;
  position: relative;
  
}
.center:before,
.center:after {
  content: '';
  position: absolute;
  top: 50%;
  border-top: 2px solid currentColor;
  transform: translateY(-50%);
  margin:3px 3px;
}

.center:before {
  right: 140px;
  width: 40%;
  ${below.med`
   right: 120px;
  width: 35%;

  `}
}
.center:after {
  left: 140px;
  width: 55%;
  ${below.med`
   right: 120px;
  width: 35%;

  `}
}

.center span {

  display: block;
  position: absolute;
  width: 100%;
  top: calc(50% - 2px);
}
`
export const AnimatedCountryCard=animated(CountryCard)




