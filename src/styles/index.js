import styled from "styled-components";
import { colors } from "../constants/colors";

export const StyledSafeArea = styled.SafeAreaView`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${colors.firstColor};
`

export const OptionsView = styled.View`
background-color: ${colors.secondColor};
padding-left: 5%;
padding-right: 5%;
box-sizing: border-box;
border: 2px solid ${colors.bordersColor};
 border-radius: 10px;
`

