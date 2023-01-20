import styled, {css}from "styled-components"
import { IoMdRibbon } from "react-icons/io"
import { HiOutlineLocationMarker,
         HiOutlineChatAlt2,
         HiOutlineClock,
        } from "react-icons/hi";

const iconsCss = css`
width: 25px;
height: 25px;
opacity: 25px;
`

export const Container = styled.div`
padding: 32px 16px;
margin: 0 16px;
display: flex;
flex-direction: column;
border: 1px solid var(--border);
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-bottom: none;
`

export const Title = styled.div`
font-sixe: 18px;
margin-bottom: 28px;
line-heigt: 22.5px;
color: var(--text1);
`
export const Card = styled.div`
display: flex;
aling-item: center;
margin-bottom: 20px;
>div{
    margin-left: 5px;
    >p{
        font-sixe: 16px;
        line-height: 20px;
        color: var(--text1);
    }
    >strong{
        font-size: 14px;
        color: var(--text2);
        font-weight: normal;
    }
    .platinum{
        color: var(--green);
    }
}
`

export const LocationIcon = styled(HiOutlineLocationMarker)`
opacity: .5;
margin-top: -1.3rem;
${iconsCss}
`

export const PlatinumIcon = styled(IoMdRibbon)`
${iconsCss}
color: var(--green);
margin-top: -1rem;
opacity: .8;
`

export const ClockIcon = styled(HiOutlineClock)`
${iconsCss}

`

export const Reputacion = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Caja = styled.ol`
list-style: none;
width: 100%;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 0 px;
padding: 0 4px;
>li{
    width:100%;
    height: 8px;

    &:nth-child(1){
        background-color: var(--reputacion1);
    }
    &:nth-child(2){
        background-color: var(--reputacion2);
    }
    &:nth-child(3){
        background-color: var(--reputacion3);
    }
    &:nth-child(4){
        background-color: var(--reputacion4);
    }
    &:nth-child(5){
        background-color: var(--reputacion5);
    }
    &.active{
        height: 12px;
    }
}
`

export const Row = styled.div`
margin-top: 10px;
display: flex;
align-item: flex-start;
>div{
    width: 33%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    >strong{
        font-size: 24px;
        font-weight: normal;
        height: 30px;
    }
    >span{
        font-size: 12px;
        color: var(--text1);
    }
    position: relative;
    & + div{
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-50%);
            height: 36px;
            border-left: 1px solid var(--border);
        }
    }
}
`

export const SupporIcon = styled(HiOutlineChatAlt2)`
${iconsCss}
`

export const Link = styled.div`
margin-top: 24px;
color:var(--blue3);
font-size: 14px;
text-decoration: none;
line-height: 18.9px;
`
