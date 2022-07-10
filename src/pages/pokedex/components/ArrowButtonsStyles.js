import styled, { css } from "styled-components";

const ArrowButton = css`
    background: #333;
    position: absolute;
    z-index: 35;
    border: 2px solid #000;
    border-radius: 25%;
`

export const BaseButton = styled.div`
    background: #211;
    position: absolute;
    z-index: 30;
    border: 2px solid #000;
    border-radius: 35%;
    width: 27px;
    height: 27px;
    left: 129px;
    top: 228px;
`

export const ArrowButtonLeft = styled.button`
    ${ArrowButton}
    width: 23px;
    height: 20px;
    left: 117px;
    top: 231px;
    clip-path: polygon(0 0, 55% 0%, 100% 50%, 55% 100%, 0 100%);

    &:active {
        left: 116px;
    }
`

export const ArrowButtonRight = styled.button`
    ${ArrowButton}
    width: 23px;
    height: 20px;
    left: 146px;
    top: 231px;
    clip-path: polygon(45% 0%, 100% 0%, 100% 100%, 45% 100%, 0% 50%);

    &:active {
        left: 147px;
    }
`

export const ArrowButtonUp = styled.button`
    ${ArrowButton}
    width: 20px;
    height: 23px;
    left: 133px;
    top: 216px;
    clip-path: polygon(0 0, 100% 0, 100% 55%, 50% 100%, 0 55%);

    &:active {
        top: 215px;
    }
`
export const ArrowButtonDown = styled.button`
    ${ArrowButton}
    width: 20px;
    height: 23px;
    left: 133px;
    top: 244px;
    clip-path: polygon(50% 0, 100% 45%, 100% 100%, 0 99%, 0 45%);

    &:active {
        top: 245px;
    }
`