import styled, { css } from "styled-components";

export const PokePageStyled = styled.main`
    width: 100vw;
    height: 100vh;
    background: #333;
`

export const ContainerLinkStyled = styled.div`
    padding: 1.2rem;
`

export const ContainerInputStyled = styled.form`
    position: absolute;
    top: 235px;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 134px;
`

export const Input = styled.input`
    background: #333;
    border: none;
    border: 1px solid #000;
    transform: rotate(.5deg);
    border-radius: 2px;
    padding: 5px;
    margin-right: 10px; 
    width: 100%;
    height: 22px;
    color: #fff;
    text-align: center;
    box-shadow: 1px 1px 2px inset #000;
    animation: flicker 2s 5;
    
    &::placeholder{color: #f2f2f2; text-align: center;}

    &:focus{animation: none;}
`

export const Button = styled.button`
    background: #333;
    position: relative;
    border: none;
    border: 1px solid #000;
    border-radius: 50%;
    box-shadow: 0px 1px 1px #000;
    transform: rotate(1deg);
    padding: 2px;
    align-self: flex-end;
    color: #fff;
    font-size: 10px;
    font-weight: 100;
    letter-spacing: 1px;
    width: 25px;
    height: 25px;
    padding: 5px;
    margin-top: 3px;

    &:active {
        box-shadow: none;
        top: 1px;
    }
`

export const PokedexStyled = styled.div`
    position: relative;
    width: 380px;
    display: flex;
    justify-content: center;
    margin: auto;
`

export const Img = styled.img`
    width: 370px;
`

export const ContainerImgPokemon = styled.div`
    background: #333;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 1px 1px 2px inset #000, -.5px -.5px 4px inset #000;
    overflow: hidden;
    position: absolute;
    left: 33px;
    top: 105px;
    width: 124px;
    height: 90px;
`

export const InfoOrder = styled.div`
    background: #aabf22;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 1px 1px 2px inset #000, -.5px -.5px 4px inset #000;
    position: absolute;
    text-align: center;
    padding: 2px;
    width: 70px;
    height: 25px;
    left: 40px;
    bottom: 69px;
    color: #333;
    font-family: 'Goldman', cursive;
`

export const InfoDiv = styled.div`
    overflow-x: hidden;
    background-color: #333;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 2px 2px 2px inset #000, -1px -1px 4px inset #000;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 146px;
    height: 112px;
    right: 15px;
    top: 88px;
    color: #55dd22;
    font-family: 'Goldman', cursive;
`

export const Error = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 110px;
    text-align: center;
    position: absolute;
    right: 18px;
    top: 90px;
    color: #55dd22;
    font-family: 'Goldman', cursive;
`

export const LedBlue = styled.div`
    background: #059; 
    position: absolute;
    top: 18px;
    left: 25px; 
    width: 39px;
    height: 39px;
    border-radius: 50%;
    box-shadow: 2px 2px 8px inset #037, 
                4px -4px 12px inset #037, 
                -4px -4px 2px inset #07b;
                
    animation: ledBlue 2s infinite alternate;
`

const led = css`
    position: absolute;
    top: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
`

export const LedRed = styled.div`
    ${led}
    background: #700; 
    left: 156px; 
`
export const LedYellow = styled.div`
    ${led}
    background: #770; 
    left: 172px; 
`
export const LedGreen = styled.div`
    ${led}
    background: #070; 
    left: 187px; 
`

export const StatusBarContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatusBarTitleStyled = styled.p`
  width: 40px;
  margin: 5px;
  color: #d3d3d3;
  font-weight: 400;
  font-size: 10px;
`;

export const StatusBarLineStyled = styled.div`
  width: 90px;
  height: 10;
  padding: 1px;
  background-color: #eeeeee;
  box-shadow: inset -1px -1px 1px #333,
                inset 1px 1px 2px #333;
  border: 1px solid #000;
  border-radius: 12px;
`;

export const StatusBarActiveStyled = styled.div`
  width: ${(props) => (props.power > 100 ? "100%" : `${props.power}%`)};
  height: 8px;
  background: #0b0;
  box-shadow: 0px 0px 2px rgba(114, 138, 183, 0.7);
  border-radius: 12px;
`;

export const CardStatusContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;