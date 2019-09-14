import {css} from 'styled-components'



export const fixed = ({x=0,y=0}={}) =>  css`
    position: fixed;
    top:${y};
    left:${x};
    `

export const absolute = ({x=0,y=0}={}) =>  css`
    position: absolute;
    top:${y};
    left:${x};
    `

export const relative = ({x=0,y=0}={}) =>  css`
    position: relative;
    top:${y};
    left:${x};
    `