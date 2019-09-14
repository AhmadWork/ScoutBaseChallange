import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { AnimatedCard } from '../styled-components/elements/Cards';
import {useSpring,interpolate} from 'react-spring'



const HomePage = () => {
const [hover,setHover]=useState(false)

const {x} =useSpring({
   x : hover ?  1.3: 1,
})
function hoverOn(){
    setHover(true)
}
function hoverOff(){
    setHover(false)
}
    return (
<div >
        <AnimatedCard onMouseOver={()=>setHover(true)} onMouseOut={()=> setHover(false)} 
         style={{transform:x.interpolate(x=>`scale(${x})`)}} as={Link} to='/countries'>
        <h1>Countries</h1>
        </AnimatedCard>
        </div>
    )
}




export default HomePage
